// 22nd for font-poppins.
import "./output.css";
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import {useCookies} from "react-cookie";

function App() {
  const [cookie,setCookie] = useCookies(["token"]);


  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      {
        cookie.token? (
        <Routes>
          { /* adding routes components here indicates to the package{react-router-dom} that  we are starting  to define our routes inside this */}
            <Route path = "/" element={<HelloComponent/>}/>
            <Route path="/home"  element={<HomeComponent/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/> {/*  " * " in path it represents if i go to any other send me to home page. */}
          </Routes>
        ): (
            <Routes>
              <Route path="/home"  element={<HomeComponent/>}/>
              <Route path = "/login" element={<LoginComponent/>}/>
              <Route path ="/signup" element ={<SignupComponent/>}/>
              <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>

        )}
      </BrowserRouter>
    </div>  
  );
}
const HelloComponent=()=>{
  return <div>this is hello from component</div>
};

export default App;