// 19th, 20th, and 21st
// ----if you want Amplify in login page replace Spotify with Amplify.----
import {useState} from "react";
import {useCookies} from "react-cookie";
import {Icon} from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link,useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";


const SignupComponent = () => {
  const[email,setEmail]=useState("");
  const [confirmEmail, setConfirmEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cookie,setCookie]=useCookies(["token"]);
  const navigate = useNavigate();

  const signUp = async () => {
    if (email !== confirmEmail) {
        alert(
          "Email and confirm email fields must match. Please check again"
        );
        return;
    }
    const data = {email, password, username, firstName, lastName};
    const response = await makeUnauthenticatedPOSTRequest("/auth/register",data);
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

      {/* Logo Section */}
      <div className="logo p-5 w-full flex justify-center border-b border-solid border-gray-400">
        <Icon icon="logos:spotify" width="150" />
      </div>

      {/* Input Section */}
      <div className="inputRegion w-1/3 py-5 flex items-center justify-center flex-col">
        
        {/* Sign-Up Heading */}
        <div className="font-bold mb-4 text-2xl">Sign Up for Free to Start Listening.</div>

        {/* First and Last Name Fields */}
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput 
            label="First Name" 
            placeholder="Enter Your First Name" 
            className="my-6"
            value={firstName}
            onChange={setFirstName}
          />
          <TextInput 
            label="Last Name" 
            placeholder="Enter Your Last Name" 
            className="my-6"
            value={lastName}
            onChange={setLastName}
          />
        </div>

        {/* Email Fields */}
        <TextInput 
          label="Email Address" 
          placeholder="Enter Your Email" 
          className="my-6"
          value={email}
          onChange={setEmail}
        />
        <TextInput 
          label="Confirm Email Address" 
          placeholder="Enter Your Email Again" 
          className="mb-6"
          value={confirmEmail}
          onChange={setConfirmEmail}
        />
        <TextInput 
          label="Username" 
          placeholder="Enter Username" 
          className="mb-6"
          value={username}
          onChange={setUsername}
        />

        {/* Password Field */}
        <PasswordInput 
          label="Create Password" 
          placeholder="Enter a Strong Password Here" 
          value={password}
          onChange={setPassword}
        />

        {/* Sign-Up Button */}
        <div className="w-full flex items-center justify-center my-8">
          <button className="bg-green-600 font-semibold p-3 px-10 rounded-full" onClick={(e)=>{
            e.preventDefault();
            signUp();
           }}>
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="w-full border border-solid border-gray-400"></div>

        {/* Log In Redirect */}
        <div className="my-6 font-semibold text-lg">Already Have an Account?</div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>

    </div>
  );
};

export default SignupComponent;
