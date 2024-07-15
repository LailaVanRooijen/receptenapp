import { useNavigate } from "react-router-dom";
import { NavigationLinkProps } from "./Interfaces";

const NavigationLink = ({ linkTo, style }: NavigationLinkProps) => {
  const navigate = useNavigate();
  return (
    <li
      className={`${style} capitalize flex justify-center items-center cursor-pointer p-2 rounded-lg hover:bg-primary-dark text-white font-bold`}
      onClick={() => {
        navigate(`/${linkTo}`);
      }}
    >
      {linkTo.replace("-", " ")}
    </li>
  );
};

export default NavigationLink;
