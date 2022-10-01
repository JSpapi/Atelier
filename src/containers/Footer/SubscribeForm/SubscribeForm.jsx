import React from 'react';
import './SubscribeForm.scss';
function SubscribeForm() {

  return (
	 <div className='app__subscribe-form text-center'>
    <form onSubmit={(e) => e.preventDefault()}>
      <input className='app__subscribe-form_input' type="email" placeholder='Email' required />
      <button className='app__subscribe-form_btn' type='submit'>Subscribe</button>
    </form>

    <p className="app__subscribe-form-policy">
      * By clicking <span>"Subscribe"</span> button, you agree to our Terms and that you have read our
      <a className='app__subscribe-form-policy_link' href="#1">Data Use Policy.</a>
    </p>
   </div>
  )
}

export default SubscribeForm;