import '../stylesheets/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='intro'>
        <div className='intro-line'>
        
            <input 
            className='intro-input-name intro-input'
            placeholder='Name:'
            ></input>
        
        
            <input 
            className='intro-input-password intro-input'
            placeholder='Password:'
            ></input>
        
        </div>
    </div>
  )
}

export default LoginPage