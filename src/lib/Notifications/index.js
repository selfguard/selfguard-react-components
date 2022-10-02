import React, { useEffect, useState } from "react";
import Input from 'react-phone-number-input/input'
import {isValidPhoneNumber} from 'react-phone-number-input'
import Toastify from 'toastify-js'
import $ from 'jquery';
import ClipLoader from "react-spinners/ClipLoader";
import SelfGuard from 'selfguard-client';

export default function Modal({api_key,userAddress }) {
  let sg = new SelfGuard(api_key);

  /**
   * It sends a text message to the phone number that is passed in as a parameter.
   * @param key - The phone number to send the SMS to.
   */
  let sendSMS = async (key) => {
    await sg.sendSMS({address:key,text: "Hello, Thank you for signing up for notifications."});
  }
  
  /**
   * It sends an email to the address specified in the key parameter
   * @param key - the email address you want to send to
   */
  let sendEmail = async (key) => {
    await sg.sendEmail({address:key,from:"test@selfguard.xyz", fromName:"testFromName", replyTo:"test@selfguard.xyz", replyToName:"testReplyToName", subject:"testSubject", html:"testContent"});
  }

  let [loading, setLoading] = useState(false);
  let [email, setEmail] = useState(null);
  let [phone, setPhone] = useState(null);
  const [requested, setRequested] = useState(false);

  
  /* This is a React hook that is called when the component is mounted. It is used to fetch the user's
  profile from the SelfGuard API. */
  useEffect(()=>{
    async function fetchData(){
      let sg = new SelfGuard(api_key);
      //get email
        try {
          let {email, phone} = await sg.get(userAddress+'-profile');
          setEmail(email);
          setPhone(phone);
        }
        catch(err){
          console.log({err});
          setEmail(null);
          setPhone(null);
        }
        setRequested(true);
    }
    fetchData();
  },[userAddress, api_key])

  /**
   * It takes the email, phone, and userAddress from the state and dispatches an action to update the
   * profile
   */
  async function updateProfile(){
    setLoading(true);
    if(phone === undefined || phone === null) phone = '';
    if(!email) email = '';
    console.log({phone});
    if(!isValidEmail(email) && email !== ""){
      Toastify({text:"Email is invalid",style: {background: "linear-gradient(to right, #dc3545, #dc3541"}}).showToast();
      setLoading(false);
      return;
    }
    if(phone !== "" && !isValidPhoneNumber(phone)){
      Toastify({text:"Phone # is invalid",style: {background: "linear-gradient(to right, #dc3545, #dc3541"}}).showToast();
      setLoading(false);
      return;
    }
    await sg.put(userAddress+'-profile',{email,phone});
    sendSMS(userAddress);
    sendEmail(userAddress);
    setLoading(false);
    Toastify({text:"Profile Updated",style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
    $('#closeModal').click();
  }

  return (
    <>
    <div className="modal fade" style={{margin:0}} tabIndex="-1" id={'notificationsModal'} >
      <div className="modal-dialog modal-dialog-centered" style={{justifyContent:'space-around'}}>
        <div style={{textAlign:'left'}}>
          {requested &&
              <div className="modal-content" style={{width:'400px'}}>
                <div className="modal-header">
                  <h5 className="modal-title">Set Up Notifications</h5>
                  <button type="button" className="btn-close" id='closeModal' data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className='mb-3' style={{display:'flex',textAlign:'left',marginBottom:'20px'}}>
                  <i style={{fontSize:'25px',marginRight:'10px'}} className='bi bi-envelope'></i>
                  <input id='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email Address" className='form-control' type="email" style={{}} value={email ? email : ''} />
                </div>
                <div className='mb-3' style={{display:'flex',textAlign:'left',marginBottom:'20px'}}>
                  <i style={{fontSize:'25px',marginRight:'10px'}} className='bi bi-telephone'></i>
                  <Input id='phone' onChange={setPhone} className='form-control' placeholder="Phone Number" type="tel" style={{}} value={phone} />
                </div>
                <div style={{ display:'flex',justifyContent:'space-between'}}>
                  {!loading ? 
                  <button onClick={()=> updateProfile()} className='btn btn-dark' style={{}}> Submit </button>
                  :
                  <ClipLoader/>
                  }
                    <a target="_blank" rel="noopener noreferrer" href="https://selfguard.xyz/home" style={{textDecoration:'none',color:'black',fontSize:'12px'}} className="mb-0 vertical">
                      Encrypted By 
                      <img style={{marginLeft:'5px'}} src="/logo2.png" width="15" height="15" className="d-inline-block" alt=""/>
                      SelfGuard
                    </a>
                </div>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
    <button onClick={showModal} style={{marginRight:'10px'}} className={`btn ${(email || phone) ? "btn-success" : "btn-dark"} vertical`}> 
      <i style={{fontSize:'20px',marginRight:'10px'}} className='bi bi-bell'></i>
      {(email || phone) ? "Notifiations Activated" : "Enable Notifications"}
    </button>
    </>
  );
}

let showModal = () => {
  new window.bootstrap.Modal('#notificationsModal').show();
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}