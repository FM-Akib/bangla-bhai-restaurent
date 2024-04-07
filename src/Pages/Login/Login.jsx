import './Login.css';
import loginImg from'../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [disabled,setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6,"transparent"); 
    },[])

    const handleValidateCaptcha = (e)=>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)===true) {
            setDisabled(false);
        }
   
        else {
            alert('Captcha Does Not Match');
        }
    }


    return (
        <div className="loginPage  min-h-screen min-w-screen">
           <div className="grid md:grid-cols-2">

           <div className="col-span-1 flex justify-center items-center">
                <img src={loginImg} alt="" />
            </div>


            <div className="col-span-1">

            <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
           <div className="sm:mx-auto sm:w-full sm:max-w-md">
         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <p className="mt-2  text-center text-sm text-gray-600 max-w">
            Or
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500 ml-2" >
                create an account
            </Link>
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" required
                            className=" appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your email address"/>
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password"  required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password"/>
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                    <LoadCanvasTemplate />
                    </label>
                    <div className="mt-1">
                        <input  name="cpatcha" type="text"  required onBlur={handleValidateCaptcha}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter captcha here"/>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                        <label  className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div className="form-control">
                    <input type="submit" disabled={disabled} className="btn group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="login"></input>
                </div>
            </form>




            <div className="mt-6">

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-100 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                        <a href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img className="h-6 w-6" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                alt=""/>
                        </a>
                    </div>
                    
                    <div>
                        <a href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                
            </div>
           </div>
        </div>
    );
};

export default Login;