import Input from '../components/input'
import './Login.css'
import {useState} from 'react'
const Login = () => {
const [email,setEmail] = useState()
const [password,setPassword] = useState()
const [check,setCheck] = useState(false)

const onChangeEmail = (event) =>{
    setEmail(event.target.value)
}
const onChangePassword = (event) =>{
    setPassword(event.target.value)
}
const onSubmit = () =>{
    console.log(email,password)
}

const showPassword = () =>{
    setCheck(!check)
}
    return (
        <div className='container'>
            <Input
            label="E-mail"
            name = "emailInput"
            value={email}
            onChange={onChangeEmail} 
            />
            <Input
            label= "Password"
            type= {check ? "text":"Password"}
            name = "passwordInput"
            value = {password}
            onChange={onChangePassword}
            />
            <button onClick={onSubmit}>Login</button>
            <input type = 'checkbox' onChange={showPassword}/>
        </div>
    );
}

export default Login;