import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react"
import TextWithHover from "../components/shared/TextWithHover";
const Home = () =>{
    return( 
    <div className="h-full w-full flex">
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

        <div className="h-full w-4/5 bg-app-black">
            <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                <div className="w-1/2 flex h-full">
                    <div className="w-3/5 flex justify-around items-center">
                        <TextWithHover displayText={"Premium"}/>
                        <TextWithHover displayText={"Support"}/>
                        <TextWithHover displayText={"Download"}/>
                        <div className="h-1/2 border-r border-white">

                        </div>
                    </div>
                    <div className="w-2/5 flex justify-around h-full items-center">
                        <TextWithHover displayText={"Sign up"}/>
                        <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                            Log in
                        </div>
                    </div>
                </div>
            </div>
            <div className="content p-8">
                <PlaylistView />
            </div>
        </div>
    </div>
    );
};

const PlaylistView = () =>{
    return (
        <div className="text-white">
            <div className="text-2xl font-semibold mb-5">
                Focus
            </div>
            <div className="w-full flex justify-between">
                 <Card title="Peaceful Piano" description="Relax and Indulge with Beautiful Piano Pieces"/>
                 <Card title="Peaceful Piano" description="Relax and Indulge with Beautiful Piano Pieces"/>
                 <Card title="Peaceful Piano" description="Relax and Indulge with Beautiful Piano Pieces"/>
                 <Card title="Peaceful Piano" description="Relax and Indulge with Beautiful Piano Pieces"/>
                 <Card title="Peaceful Piano" description="Relax and Indulge with Beautiful Piano Pieces"/>
            </div>
        </div>
    );
};

const Card = ({title,description}) =>{
    return(
        <div className="bg-black bg-opacity-60 w-1/6 p-4 rounded-lg">
            <div className="py-4">
                <img className="w-full rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDE4cJvMUaRNtQKS6pJCi7je2_72uwO5USw&s"
                alt="label"
                />
            </div>
            <div className="text-white text-sm font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;