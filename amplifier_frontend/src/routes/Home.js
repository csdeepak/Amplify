import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react"
const Home = () =>{
    return( 
    <div className="h-full w-full flex">
        {/*this first  div tag is for left pannel*/}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between">
            <div>
                {/*its for logo*/}
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="spotify logo" width={125}/>

                </div>
                <div className="py-5">
                    <IconText iconName={"material-symbols:home"} diplayText={"Home"} active/>
                    <IconText iconName={"ic:round-search"} diplayText={"Search"}/>
                    <IconText iconName={"mdi:bookshelf"} diplayText={"Library"}/>
                </div>
                <div className="pt-5">
                <IconText iconName={"material-symbols:add-box"} diplayText={"Create Playlist"}/>
                <IconText iconName={"fluent-emoji-flat:red-heart"} diplayText={"Liked Songs"}/>
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

        <div className="h-full">

        </div>

    </div>

    );
};

export default Home;