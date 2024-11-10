// 22nd for font-poppins.
import "./output.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";


function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      <Routes>
        {
          /* adding routes components here indicates to the package{react-router-dom} 
          that  we are starting  to define our routes inside this */
        }
          <Route path = "/" element={<HelloComponent/>}/>
          <Route path = "/login" element={<LoginComponent/>}/>
          <Route path ="/signup" element = {<SignupComponent/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>  
  );
}
const HelloComponent=()=>{
  return <div>this is hello from component</div>
};

export default App;
