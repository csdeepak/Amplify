import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { useState } from "react";
import {Icon} from "@iconify/react"
import {Howl, Howler} from 'howler';
import TextWithHover from "../components/shared/TextWithHover";


const LoggedInContainer = ({children}) =>{
    const [soundPlayed,setSoundPlayed]=useState(null);
    const [isPaused,setIsPaused]=useState(true);

    const playSound = (songSrc)=> 
        {
            if (soundPlayed){
                soundPlayed.stop();
            }

            let sound = new Howl(
                {
                    src: [songSrc],
                    html5: true
                });
            setSoundPlayed(sound);
            sound.play();
            console.log(sound);
        };

    const pauseSound = () => {
        if (soundPlayed) {
                    soundPlayed.pause();
            }
        };
        

    const togglePlayPause=()=>{
        if(isPaused){
            playSound("https://res.cloudinary.com/doioswwbr/video/upload/v1731605698/kmc98lkur1zt5djoz3e0.mp3");
            setIsPaused(false);
        }
        else{
            pauseSound();
            setIsPaused(true);
        }
    };

    return( 
    <div className="h-full w-full bg-app-black">
        <div className="h-9/10 w-full flex">
            {/*this first  div tag is for left pannel*/}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    {/*its for logo*/}
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt="spotify logo" width={125}/>

                    </div>
                    <div className="py-5">
                        <IconText iconName={"material-symbols:home"} displayText={"Home"} active/>
                        <IconText iconName={"ic:round-search"} displayText={"Search"}/>
                        <IconText iconName={"mdi:bookshelf"} displayText={"Library"}/>
                        <IconText iconName={"fxemoji:musicascend"} displayText={"My Songs"}/>
                    </div>
                    <div className="pt-5">
                    <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"}/>
                    <IconText iconName={"fluent-emoji-flat:red-heart"} displayText={"Liked Songs"}/>
                    </div>
                </div>
                <div className="px-1">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="flat-color-icons:globe"/>
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>    
                    </div>
                </div>
            </div>

            {/*the second div tag is for main content*/}

            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-2/3 flex justify-around items-center text-sm">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Download"}/>
                            <div className="h-1/2 border-r border-white">

                            </div>
                        </div>
                        <div className="w-1/3 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Upload Song"}/>
                            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                AC
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    {children}
                </div>
            </div>
        </div> 
        <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
            <div className="w-1/4 flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWDO6rpgwFGEvAU3GLkzwrkHplgXh8yLT9w&s"
                        alt="currentSongThumbnail"
                        className="h-14 w-14 rounded"
                />
                <div className="pl-4">
                    <div className="text-sm hover:underline cursor-pointer">Expresso</div>
                    <div className="text-xs text-gray-500 hover:underline cursor-pointe">Sabrina Carpenter</div>
                </div>
            </div>
            <div className="w-1/2 flex justify-center flex-col items-center">
                <div  className="flex w-2/5 justify-between items-center">
                    <Icon icon="gravity-ui:shuffle" fontSize={30} className="cursor-pointer text-gray-300 hover:text-white"/>
                    <Icon icon="fluent:previous-16-filled"fontSize={30} className="cursor-pointer text-gray-300 hover:text-white"/>
                    <Icon icon={isPaused?"ic:baseline-play-circle":"ic:baseline-pause-circle"}fontSize={45} className="cursor-pointer text-gray-300 hover:text-white" onClick={togglePlayPause}/>
                    <Icon icon="fluent:next-16-filled" fontSize={30} className="cursor-pointer text-gray-300 hover:text-white"/>
                    <Icon icon="mi:repeat" fontSize={30} className="cursor-pointer text-gray-300 hover:text-white"/>
                    
                </div>
                <div></div>
            </div>
            <div className="w-1/4 flex justify-end">hello</div>   
        </div>   
    </div>      
    );
};



export default LoggedInContainer;