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
let domain = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:8080"

const Notifications = ({onDisabled, onEnabled, api_key, user_address, collection_name}) => {
  let sg = new SelfGuard(api_key,null,null,null,domain);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    },[value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }
  const prevAccount = usePrevious(user_address)

  /* Setting up the state of the component. */
  let [loading, setLoading] = useState(false);
  let [email, setEmail] = useState(null);
  let [phone, setPhone] = useState(null);
  let [country, setCountry] = useState(null);
  let [requested, setRequested] = useState(false);
  let [activated, setActivated] = useState(false);
  let [checked, setChecked] = useState(true);

  /* This is a React hook that is called when the component is mounted. It is used to fetch the user's
  profile from the SelfGuard API. */
  useEffect(()=>{
    async function fetchData(){
      //get email
        try {
          let profile = await sg.getProfile({user_address,collection_name});
          if(profile.email || profile.phone) {
            onEnabled();
            setActivated(true);
          }
          else {
            onDisabled();
            setActivated(false);
          }
        }
        catch(err){
          console.log(err);
          onDisabled();
          setActivated(false);
          setEmail(null);
          setPhone(null);
        }
        setRequested(true);
    }
    if(prevAccount !== user_address && user_address){
      fetchData();
    }
  },[user_address,prevAccount,api_key, collection_name])

  /**
   * It takes the email, phone, and user_address from the state and dispatches an action to update the
   * profile
   */
   async function updateProfile(e){
    if(e && e.preventDefault) e.preventDefault();
    if(!checked) return;
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
      await sg.updateProfile({user_address,value:{email,phone},collection_name});
      let text = "Notifications Enabled";

      if(email || phone) {
        onEnabled();
        setActivated(true);
      }
      if(!email && !phone) {
        text = "Notifications Disabled";
        onDisabled();
        setActivated(false);
      }

      setLoading(false);
      Toastify({text,style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
      $('#closeModal').click();
    }
    catch(err){
      console.log({err});
      // Toastify({text:err,style: {background: "linear-gradient(to right, #dc3545, #dc3541"}}).showToast();
      setLoading(false);
    }
  }

  let disableNotifications = async () => {
    await sg.updateProfile({user_address,value:null, collection_name});
    onDisabled();
    setActivated(false);
    Toastify({text:"Notifications Disabled",style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
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
                  <h6 className="modal-title">Subscribe to {collection_name}</h6>
                  <button type="button" className="btn-close" id='closeModal' data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={updateProfile}>
                    <div className='mb-3' style={{display:'flex',textAlign:'left',marginBottom:'20px'}}>
                      <i style={{fontSize:'25px',marginRight:'10px'}} className='bi bi-envelope'></i>
                      <input id='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email Address" className='form-control' type="email" style={{}} value={email ? email : ''} />
                    </div>

                    <div className='mb-3' style={{display:'flex',textAlign:'left',marginBottom:'20px'}}>
                      <i style={{fontSize:'25px',marginRight:'10px'}} className='bi bi-telephone'></i>
                      <Input specialLabel={null} country={'us'} id='phone' onChange={updatePhone} placeholder="Phone Number" type="tel" value={phone} />
                    </div>

                    <div className='mb-3' style={{display:'flex',textAlign:'left',marginBottom:'20px'}}>
                      <input style={{minWidth:'15px',minHeight:'15px'}} className="form-check-input" type="checkbox" value={checked} checked={checked} onChange={()=>{}} onClick={()=>{setChecked(!checked)}} id="flexCheckDefault"/>
                      <label className="form-check-label" for="flexCheckDefault" style={{marginLeft:'10px',fontSize:'10px',marginTop:'3px'}}>
                        I consent to receiving notifications from {collection_name} through email and text, 
                        and I acknowledge that I have read and understood the {' '}
                        <a target="_blank" rel="noopener noreferrer" href='https://app.termly.io/document/terms-of-use-for-saas/41431ed0-b5e0-40ae-86b1-7d3574dbc7a9'>Terms & Conditions</a> 
                        {' '} and {' '}<a target="_blank" rel="noopener noreferrer" href='https://app.termly.io/document/privacy-policy/5f00313b-9c18-49c4-84c1-13efea1cadd9'>Privacy Policy.</a>
                      </label>
                    </div>
                    <hr/>
                    <p className='mb-3' style={{fontSize:'10px',display:'flex',textAlign:'left',marginBottom:'20px'}}>
                      Your email and phone number are encrypted such that {collection_name} will not be able to view them. You can always disable notifications using this widget.
                    </p>

                  <div style={{ display:'flex',justifyContent:'space-between'}}>
                    {!loading ? 
                    <button onClick={updateProfile} disabled={!checked} className='btn btn-dark'> Submit </button>
                    :
                    <ClipLoader/>
                    }
                      <a target="_blank" rel="noopener noreferrer" href="https://selfguard.xyz/home" style={{textDecoration:'none',color:'black',fontSize:'12px'}} className="mb-0 vertical">
                        Encrypted By 
                        <img style={{marginLeft:'5px'}} src="/logo2.png" width="15" height="15" className="d-inline-block" alt=""/>
                        SelfGuard
                      </a>
                  </div>
                  </form>
                  <div className='text-center'>
                    <p className='' style={{fontSize:'10px',display:'flex',textAlign:'left',marginTop:'10px',marginBottom:0}}>
                      Want to setup your own notification group? <a style={{color:'black',marginLeft:'2px'}} target="_blank" rel="noopener noreferrer" href='https://getnotified.xyz'> Click here to get started.</a>
                    </p>
                  </div>
                </div>
              </div>
          }
          </div>
        </div>
      </div>
      <button style={{marginTop:'10px'}} onClick={!activated ? showModal : disableNotifications} className={`btn ${(activated) ? "btn-danger" : "btn-dark"} vertical`}> 
        <i style={{fontSize:'20px',marginRight:'10px'}} className={`bi bi-${activated ? 'bell-slash' : 'bell'}`}></i>
        {activated ? "Disable Notifications" : "Enable Notifications"}
      </button>
    </>
  );
}

export default Notifications;