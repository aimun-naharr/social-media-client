import React from 'react';
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className='auth'>
            <div className='a-left'>
                <img src={Logo} alt=""/>
                <div className='webname'>
                    <h1>Squid</h1>
                    <h6>Make memories with your close ones</h6>
                </div>
            </div>
          <Login/>
        </div>
    );
};
function Login(){
    return(
        <div className='a-right'>
    <form className='infoForm authForm'>




        <h1>LOGIN</h1>
<div>
<input className='infoInput' placeholder='@userName' type='text' name='userName'/>
</div>

<div>
<input className='infoInput' placeholder='Password' type='password' name='password'/>

</div>
<div>
    <span style={{fontSize: "12px"}}>New to Squid? Please SignUp</span>
</div>
<button className='button infoButton' type='submit'>
    LOG IN
</button>
    </form>
</div>
    )
}

function SignUp(){
   return(
    <div className='a-right'>
    <form className='infoForm authForm'>




        <h1>Sign Up</h1>
<div>
<input className='infoInput' placeholder='First name' type='text' name='firstName'/>
<input className='infoInput' placeholder='Last name' type='text' name='lastName'/>
</div>
<div>
<input className='infoInput' placeholder='@userName' type='text' name='userName'/>
</div>
<div>
<input className='infoInput' placeholder='Password' type='password' name='password'/>
<input className='infoInput' placeholder='Confirm Password' type='password' name='confirmPassword'/>
</div>
<div>
    <span>Already have an account? Please Login</span>
</div>
<button className='button infoButton' type='submit'>
    SIGN UP
</button>
    </form>
</div>
   )
}

export default Auth;