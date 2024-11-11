
const  TextWithHover =({displayText,active})=>{
    return( 
    <div className="flex items-center justify-start cursor-pointer">
        <div className={`${active ? "text-white" : "text-gray-400"} font-semibold text-lg hover:text-white`}> {/*200 indicates ligth color and 600 indicates dark color*/}
            {displayText}
        </div> 
    </div>
    );
};
export default TextWithHover;