//19 th and 20th and 21th
// ----if u want amplify in login page replace sopity with Amplify.----
import { Icon } from '@iconify/react';
import TextInput from "../components/shared/TextInput";
import PasswordInput from '../components/shared/PasswordInput';
import {Link} from 'react-router-dom';

const LoginComponent =()=>{

    return (
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="logo p-5 w-full flex justify-center border-b border-solid border-gray-400">
            <Icon icon="mdi:spotify" width="110" color="green" />
          </div> 
          <div className="inputRegion w-1/3 py-5 flex items-center justify-center flex-col">
            { /* i will have my 2 inputs ( email and password) and i will have my sign Up */}
            <div className="font-bold mb-4">To Continue, Log In to Spotify.</div>
            <TextInput label="Email Address or Username" placeholder="Email Address or Username" className="my-3"/>
            <PasswordInput label="Password" placeholder="Password"/>
            <div className="w-full flex items-center justify-end my-8">
            <button className="bg-green-600 font-semibold p-3 px-10 rounded-full">LOG IN</button> {/*keep 500 to see color if it is 400 unable to see*/}
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