import {useState,useEffect} from "react";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../containers/LoggedInContainer";


const MyMusic = ()=>{
    const [songData,setSongData] = useState([]);
    useEffect(()=>{
        const getData= async()=>{
        // fetching the data
        const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
        setSongData(response.data);
    };
        getData();

    },[]);
return(
    <LoggedInContainer>
         <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8"> MY SONGS</div>
                    <div className="space-y-3 overflow-auto">
                        {songData.map((item) =>{
                           return <SingleSongCard info={item} playSound={()=>{}}/>;
                        })}
                   </div>
    </LoggedInContainer>
)
}
export default MyMusic;