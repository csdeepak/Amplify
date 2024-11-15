// 22nd for font-poppins.
import "./output.css";
import { useState } from "react";
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import {useCookies} from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusiuc from "./routes/MyMusic";
import songContext from "./contexts/songContext";

function App() {
  const [currentSong,setCurrentSong]=useState(null);
  const [cookie,setCookie] = useCookies(["token"]);


  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      {
        cookie.token? (
        <songContext.Provider value={{currentSong,setCurrentSong}}>
           <Routes>
                { /* adding routes components here indicates to the package{react-router-dom} that  we are starting  to define our routes inside this */}
                <Route path = "/" element={<HelloComponent/>}/>
                <Route path="/home"  element={<LoggedInHomeComponent/>}/>
                <Route path="/uploadSong" element={<UploadSong/>}/>
                <Route path="/myMusic" element={<MyMusiuc/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/> {/*  " * " in path it represents if i go to any other send me to home page. */}
            
          </Routes>
        </songContext.Provider>
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