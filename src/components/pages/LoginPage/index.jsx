import './styles.css';
import { Button } from '../../Button';
import {AiFillFacebook} from 'react-icons/ai';

export const LoginPage = () => {
    return (
        <div className="login-page">
            <form className="signin-form">
                <h1>Sign In</h1>
                <input type="text" required placeholder="Email or phone number"/>
                <input type="password" required placeholder="Password"/>
                <Button type="primary" text="Sign In" action={console.log("logging in")}/>
                <div className="remember-me">
                    <div>
                        <input type="checkbox" name="remember" value="Remember me"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#">Need help?</a>
                </div>
                
                <div className="facebook-login">
                    <AiFillFacebook/><a href="#">Log in with Facebook</a>
                </div>
                
                <p>New to Netflix?<a href="#">Sign up now</a></p>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>
            </form>
        </div>
    )
}