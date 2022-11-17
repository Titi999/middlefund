import React from "react";
import './index.css';
import loginImage from '../assets/images/register.svg';




function Login(){
    return(
        <div>
            <div class="logIncontainer">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="" method="post" class="sign-in-form">
                            <h2 class="title">Sign in</h2>
                            <div class="input-field">
                            
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Email Address" name="email" value="" required />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" name="password" value="" required />
                            </div>
                            <input type="submit" value="Login" name="signin" class="btn solid" />
                            <p><a href="forgot-password.php" class="forgotPassword">Forgot Password?</a></p>
                        </form>  
                    </div>
                </div>

                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>
                            <br/>
                            <button class="btn transparent" id="sign-up-btn">Sign up</button>
                        </div>
                        <img src={loginImage} width="2px" height="250" class="image" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;