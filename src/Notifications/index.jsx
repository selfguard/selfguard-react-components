import React from "react";
import { useEffect, useState, useRef } from "react";
import Input from 'react-phone-input-2'
import Toastify from 'toastify-js'
import $ from 'jquery';
import ClipLoader from "react-spinners/ClipLoader";
import SelfGuard from 'selfguard-client';
import './index.css';
import 'react-phone-input-2/lib/style.css'
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();


const Notifications = ({api_key, userAddress}) => {

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    },[value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }

  const prevAccount = usePrevious(userAddress)

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

  /* Setting up the state of the component. */
  let [loading, setLoading] = useState(false);
  let [email, setEmail] = useState(null);
  let [phone, setPhone] = useState(null);
  let [country, setCountry] = useState(null);
  let [requested, setRequested] = useState(false);
  let [activated, setActivated] = useState(false);

  async function fetchData(){
    let sg = new SelfGuard(api_key);
    //get email
      try {
        let profile = await sg.get(userAddress+'-profile');
        if(profile.email || profile.phone) setActivated(true);
        else setActivated(false);
        setEmail(profile.email);
        setPhone(profile.phone);
      }
      catch(err){
        console.log(err);
        setActivated(false);
        setEmail(null);
        setPhone(null);
      }
      setRequested(true);
  }

  /* This is a React hook that is called when the component is mounted. It is used to fetch the user's
  profile from the SelfGuard API. */
  useEffect(()=>{
    fetchData();
  },[])

  useEffect(()=>{
    console.log({prevAccount, userAddress});
    if(prevAccount !== userAddress && userAddress){
      fetchData();
    }
  },[userAddress,prevAccount])

  /**
   * It takes the email, phone, and userAddress from the state and dispatches an action to update the
   * profile
   */
   async function updateProfile(){
    setLoading(true);
    try {
      if(phone === undefined || phone === null) phone = '';
      if(!email) email = '';
      if(!isValidEmail(email) && email !== ""){
        Toastify({text:"Email is invalid",style: {background: "linear-gradient(to right, #dc3545, #dc3541"}}).showToast();
        setLoading(false);
        return;
      }
      if(phone !== "" && !phoneUtil.isValidNumber(phoneUtil.parse(phone,country))){
        Toastify({text:"Phone # is invalid",style: {background: "linear-gradient(to right, #dc3545, #dc3541"}}).showToast();
        setLoading(false);
        return;
      }
      await sg.put(userAddress+'-profile',{email,phone});
      if(email || phone) setActivated(true);
      if(!email && !phone) setActivated(false);

      if(phone) sendSMS(userAddress);
      if(email) sendEmail(userAddress);

      setLoading(false);
      Toastify({text:"Profile Updated",style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
      $('#closeModal').click();
    }
    catch(err){
      setLoading(false);
    }
  }

  let showModal = () => {
    new window.bootstrap.Modal('#notificationsModal').show();
  }
  
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function updatePhone(v, c){
    setPhone(v);
    setCountry(c.countryCode);
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
      <link href="https://api.fonts.coollabs.io/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></script>
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
                    <Input specialLabel={null} country={'us'} id='phone' onChange={updatePhone} placeholder="Phone Number" type="tel" value={phone} />
                  </div>

                  <div style={{ display:'flex',justifyContent:'space-between'}}>
                    {!loading ? 
                    <button onClick={updateProfile} className='btn btn-dark'> Submit </button>
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
      <button onClick={showModal}className={`btn ${(email || phone) ? "btn-success" : "btn-dark"} vertical`}> 
        <i style={{fontSize:'20px',marginRight:'10px'}} className='bi bi-bell'></i>
        {activated ? "Notifiations Activated" : "Enable Notifications"}
      </button>
    </>
  );
}

export default Notifications;