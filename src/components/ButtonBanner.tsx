type ButtonProps = {
    buttonColor?: string;
    text: string;
  };
  
  const Button = (props:ButtonProps) => {
    return (
      <button
     className="border-white border-2 text-white font-semibold p-2 rounded w-[40%] bg-red-600 hover:bg-black">
        {props.text}
        
      </button>
    );
  };
  
  export default Button;
  