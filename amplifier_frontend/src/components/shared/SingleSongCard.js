const SingleSongCard = ({info,playSound}) =>{
    return(
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm" onClick={()=>{playSound(info.track);}}>
            <div
            className="w-14 h-14 bg-cover bg-center"  // to cahnge size modify this..
            style={{
                backgroundImage:`url("${info.thumbnail}")`
            }}
            >
            </div>
            <div className="flex w-full">
                <div className="text-white flex justify-center flex-col pl-4 w-5/6">
                    <div className="cursor-pointer hover:underline">{info.name}</div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">{info.artist.firstName+ " "+info.artist.lastName}</div>
                </div>
                <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
                    <div>3:44</div>
                    {/*<div className="text-gray-400 text-lg flex items-center justify-center pl-3">...</div>*/}
                </div>
            </div>
        </div>
    )
};

export default SingleSongCard;