
interface Props{
    children: string;
    color?: 'primary' | 'success' | 'danger' | 'warning'; // optional but can have only these values.
    onClick: ()=> void;
}

const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button 
        className={"btn btn-" + color} 
        onClick={onClick}>
        {children}
    </button>
  )
}

export default Button