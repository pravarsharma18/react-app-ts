import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const LikeBtn = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;

  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default LikeBtn;
