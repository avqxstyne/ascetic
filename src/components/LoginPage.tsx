import { useState } from 'react';
import '../stylesheets/LoginPage.css';

const LoginPage = () => {
  const regExp = /[a-zA-Z0-9]/g

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {

  }

  return (
    <div className='login'>
        <div className='login-left'>
          <input 
            className='login-name login-input'
            placeholder='Name:'
            value={name}
            onChange={(e)=> {
              setName(e.target.value);

              
            }}
            ></input>
        
        
            <input 
            className='login-password login-input'
            placeholder='Password:'
            value={password}
            onChange={(e)=> {
              setPassword(e.target.value);
              if (regExp.test(name) && password.length > 7) {
                console.log("both inputs used")
              }
            }}
            ></input>

            <div className='login-forgot-password'>Forgot password?</div>

            <button type='submit' className='login-submit'>Submit</button>
        </div>
        <div className='spacer'>
          <svg className='login-svg' id="visual" viewBox="0 0 100 600" width="100" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="100" height="600" fill="#e9a1a1"></rect><path d="M85 0L72.2 25C59.3 50 33.7 100 36 150C38.3 200 68.7 250 83.7 300C98.7 350 98.3 400 91.3 450C84.3 500 70.7 550 63.8 575L57 600L0 600L0 575C0 550 0 500 0 450C0 400 0 350 0 300C0 250 0 200 0 150C0 100 0 50 0 25L0 0Z" fill="#ffffff" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
        </div>
        <div className='login-right'></div>
    </div>
  )
}

export default LoginPage