// 19 and 20 
const TextInput =({label,placeholder,className})=>{
    return (
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>  {/* special symbol ` ` use this*/}
    <label for={label} className="font-semibold"> {label} </label>
    <input 
    type="text"
     placeholder={placeholder}
     className="p-3 border border-gray-500 border-solid rounded placeholder-gray-800"
     id={label}
     />
     </div>
    );
    }; 

export default TextInput;