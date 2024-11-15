import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react"
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData =[{title:"Peaceful Piano",description:"Relax and Indulge with Beautiful Piano Pieces",imgUrl:"https://images.unsplash.com/photo-1577877777751-3f1ec20a0715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHx8MA%3D%3D"},
                       {title:"Deep Focus", description:"Keep Calm And Focus with Music",imgUrl:"https://images.unsplash.com/photo-1453748866136-b1dd97284f49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWR5fGVufDB8fDB8fHww"},
                       {title:"Instrumental Study",description:"Focus With Soft Study Music",imgUrl:"https://media.istockphoto.com/id/517324559/photo/violin-in-vintage-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxV1IILse0nDB-ukZlA2OSGVc3XgcBhUqJt597lTDtw="},
                       {title:"Focus Flow",description:"Up tempo Instrumental Hip Hop Beats",imgUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D" },
                       {title:"Beats to Think to",description:"Focus With Deep Techno And Tch House",imgUrl:"https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"},
                      ];

const spotifyPalylistsCardData =[{title:"Hello",description:"Relax and Indulge with Beautiful Piano Pieces",imgUrl:"https://images.unsplash.com/photo-1577877777751-3f1ec20a0715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHx8MA%3D%3D"},
                       {title:"Deep Focus", description:"Keep Calm And Focus with Music",imgUrl:"https://images.unsplash.com/photo-1453748866136-b1dd97284f49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWR5fGVufDB8fDB8fHww"},
                       {title:"Instrumental Study",description:"Focus With Soft Study Music",imgUrl:"https://media.istockphoto.com/id/517324559/photo/violin-in-vintage-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxV1IILse0nDB-ukZlA2OSGVc3XgcBhUqJt597lTDtw="},
                       {title:"Focus Flow",description:"Up tempo Instrumental Hip Hop Beats",imgUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D" },
                       {title:"Beats to Think to",description:"Focus With Deep Techno And Tch House",imgUrl:"https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"},
                       ];

const TeluguAlbumCardsData =[{title:"sound",description:"Relax and Indulge with Beautiful Piano Pieces",imgUrl:"https://images.unsplash.com/photo-1577877777751-3f1ec20a0715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHx8MA%3D%3D"},
                       {title:"Deep Focus", description:"Keep Calm And Focus with Music",imgUrl:"https://images.unsplash.com/photo-1453748866136-b1dd97284f49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWR5fGVufDB8fDB8fHww"},
                       {title:"Instrumental Study",description:"Focus With Soft Study Music",imgUrl:"https://media.istockphoto.com/id/517324559/photo/violin-in-vintage-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxV1IILse0nDB-ukZlA2OSGVc3XgcBhUqJt597lTDtw="},
                       {title:"Focus Flow",description:"Up tempo Instrumental Hip Hop Beats",imgUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D" },
                       {title:"Beats to Think to",description:"Focus With Deep Techno And Tch House",imgUrl:"https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"},
                       ];
const EnglishAlbumCardsData =[{title:"Justin Bieber",description:"Artist",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPMT8-_Il1kD26zUzmdyb61OTGA-kS_wyvA&s"},
                        {title:"Sabrina Carpenter", description:"Artist",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWDO6rpgwFGEvAU3GLkzwrkHplgXh8yLT9w&s"},
                        {title:"Instrumental Study",description:"Focus With Soft Study Music",imgUrl:"https://media.istockphoto.com/id/517324559/photo/violin-in-vintage-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxV1IILse0nDB-ukZlA2OSGVc3XgcBhUqJt597lTDtw="},
                        {title:"Focus Flow",description:"Up tempo Instrumental Hip Hop Beats",imgUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D" },
                        {title:"Beats to Think to",description:"Focus With Deep Techno And Tch House",imgUrl:"https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"},
                        ];

const Home = () =>{
    return( 
    <div className="h-full w-full bg-black">
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
                    <PlaylistView titleText="Focus" cardsData={focusCardsData}/>
                    <PlaylistView titleText="Spotify Playlist" cardsData={spotifyPalylistsCardData}/>
                    <PlaylistView titleText="Telugu Album" cardsData={TeluguAlbumCardsData}/>
                    <PlaylistView titleText="English Album" cardsData={EnglishAlbumCardsData}/>
                </div>
            </div>
        </div> 
        <div className="w-full h-1/20 bg-black bg-opacity-30 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWDO6rpgwFGEvAU3GLkzwrkHplgXh8yLT9w&s"/>
        </div>   
    </div>      
    );
};

const PlaylistView = ({titleText,cardsData}) =>{
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">
                {titleText}
            </div>
            <div className="w-full flex justify-between space-x-4">
                {
                    //cardsData will be an array.
                    cardsData.map(items=>{
                        return (<Card 
                        title={items.title} 
                        description={items.description} 
                        imgUrl={items.imgUrl}/>
                        );
                    })
                }
                {/*<Card 
                    title="Peaceful Piano" 
                    description="Relax and Indulge with Beautiful Piano Pieces"
                    imgUrl="https://images.unsplash.com/photo-1577877777751-3f1ec20a0715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHx8MA%3D%3D"
                />
                <Card 
                    title="Deep Focus " 
                    description="Keep Calm And Focus with Music"
                    imgUrl="https://images.unsplash.com/photo-1453748866136-b1dd97284f49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWR5fGVufDB8fDB8fHww"
                />
                <Card 
                    title="Instrumental Study "
                    description="Focus With Soft Study Music"
                    imgUrl="https://media.istockphoto.com/id/517324559/photo/violin-in-vintage-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxV1IILse0nDB-ukZlA2OSGVc3XgcBhUqJt597lTDtw="
                />
                <Card 
                    title="Focus Flow"
                    description="Up tempo Instrumental Hip Hop Beats"
                    imgUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D" 
                />
                <Card 
                    title="Beats to Think to"
                    description="Focus With Deep Techno And Tch House"
                    imgUrl="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"
                />*/}
            </div>
        </div>
    );
};

const Card = ({title,description,imgUrl}) =>{
    return(
        <div className="bg-black bg-opacity-40 w-1/5 p-4  rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md"
                src={imgUrl}
                alt="label"
                />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;