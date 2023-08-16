type ButtonProps = {
  buttonColor?: string;
  text: string;
};

const Button = (props:ButtonProps) => {
  return (
    <button style={{
      backgroundColor:props.buttonColor
    }} className="border-white border-2 text-white font-semibold p-2 rounded hover:text-gray-200 w-[40%] hover:border-gray-200">
      {props.text}
      
    </button>
  );
};

export default Button;
