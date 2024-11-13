//19 th and 20th and 21th
// ----if u want amplify in login page replace sopity with Amplify.----
import {useState} from "react";
import {Icon} from '@iconify/react';
import TextInput from "../components/shared/TextInput";
import PasswordInput from '../components/shared/PasswordInput';
import {Link,useNavigate} from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';
import {useCookies} from 'react-cookie';

{/* every time u make  changes in  tailwind.config.js run this commnad npx tailwindcss@2 build src/index.css -c tailwind.config.js -o src/output.css  and once again do npm start.*/}
const LoginComponent =()=>{
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [cookies,setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {

    const data = {email, password};
    const response = await makeUnauthenticatedPOSTRequest("/auth/login",data);
    if (response && !response.err) { 
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token",token,{path:"/",expires:date});
      alert("Success");
      navigate("/home");
    } 
    else 
    {
      alert("Failure");
    }
};
    return (
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="logo p-5 w-full flex justify-center border-b border-solid border-gray-400">
          <Icon icon="logos:spotify" width="150" />
          </div> 
          <div className="inputRegion w-1/3 py-5 flex items-center justify-center flex-col">
            { /* i will have my 2 inputs ( email and password) and i will have my sign Up */}
            <div className="font-bold mb-4">To Continue, Log In to Spotify.</div>
            <TextInput label="Email Address or Username" placeholder="Email Address or Username" className="my-3" value={email} onChange={setEmail}/>
            <PasswordInput label="Password" placeholder="Password" value={password} onChange={setPassword}/>  {/* instead of setValue i gave onChange because it is showing ERROR */}
            <div className="w-full flex items-center justify-end my-8">
            <button className="bg-green-600 font-semibold p-3 px-10 rounded-full" onClick={(e) =>{ 
              e.preventDefault();
              login();
            }}>
              LOG IN</button> {/*keep 500 to see color if it is 400 unable to see*/}
            </div>
            <div className="w-full border  border-solid border-gray-400"></div>
            <div className="my-6 font-semibold text-lg">Don't Have an Account?</div> {/* text-lg purpose to  shrinks. */}
            <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
            <Link to="/signup"> SIGN UP FOR SPOTIFY</Link>  {/* if i use a href instead of link it refreshes the whole which reduces the effeciency but if i use link tag it doesnot refresh those things which is common. */ }
            </div>
          </div>
        </div>
      );    
};
export default LoginComponent;