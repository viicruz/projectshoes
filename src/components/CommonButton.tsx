type ButtonProps = {
  ButtonColor?: string;
  text: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button className="border-white border-2 text-white font-semibold p-2 rounded w-[40%] bg-gray-500 hover:bg-black">
      {props.text}
    </button>
  );
};

export default Button;
