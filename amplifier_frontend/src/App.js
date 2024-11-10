
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        {
          /* adding routes components here indicates to the package{react-router-dom} 
          that  we are starting  to define our routes inside this */
        }
          <Route path = "/" element={<HelloComponent/>}/>
          <Route path = "/hi" element={<div>hi</div>}/>
          <Route path = "/bye" element={<div>bye</div>}/>


        
      </Routes>
      </BrowserRouter>

  );
}
const HelloComponent=()=>{
  return <div>this is hello from component</div>
};

export default App;
