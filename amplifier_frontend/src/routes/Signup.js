//19 th and 20th and 21th
// ----if u want amplify in login page replace sopity with Amplify.----
import { Icon } from '@iconify/react';
import TextInput from "../components/shared/TextInput";
import PasswordInput from '../components/shared/PasswordInput';
import {Link} from 'react-router-dom';

const SignupComponent =()=>{

    return (
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="logo p-5 w-full flex justify-center border-b border-solid border-gray-400">
          <Icon icon="logos:spotify" width="150" />
          </div> 
          <div className="inputRegion w-1/3 py-5 flex items-center justify-center flex-col">
            { /* i will have my 2 inputs ( email and password) and i will have my sign Up */}
            <div className="font-bold mb-4 text-2xl">Sign Up for Free to Start Listening.</div>
            <TextInput label="Email Address" placeholder="Enter Your Email" className="my-6"/>
            <TextInput label="Confirm Email Address" placeholder=" Enter Your Email Again" className="mb-6"/>
            <PasswordInput label="Create Password" placeholder="Enter a Strong Password Here"/>
            <TextInput label="What Should We Call You?" placeholder=" Enter Your Profile Name" className="my-6"/>
            <div className="w-full flex items-center justify-center my-8">
            <button className="bg-green-600 font-semibold p-3 px-10 rounded-full">SIGN UP</button> {/*keep 500 to see color if it is 400 unable to see*/}
            </div>
            <div className="w-full border  border-solid border-gray-400"></div>
            <div className="my-6 font-semibold text-lg">Already Have an Account?</div> {/* text-lg purpose to  shrinks. */}
            <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
              <Link to="/login">LOG IN INSTEAD</Link>
                </div>
          </div>
        </div>
      );    
};
export default SignupComponent;