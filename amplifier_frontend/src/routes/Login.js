//19 th
import { Icon } from '@iconify/react';
import TextInput from "../components/shared/TextInput";

const LoginComponent =()=>{

    return (
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="p-5 w-full flex justify-center border-b border-solid border-gray-400">
            <Icon icon="mdi:spotify" width="110" color="red" />
          </div>
          <div className="inputRegion w-1/3 py-10 ">
            { /* i will have my 2 inputs ( email and password) and i will have my sign Up */}
                <TextInput/>
          </div>
        </div>


      );
      
       
};
export default LoginComponent;