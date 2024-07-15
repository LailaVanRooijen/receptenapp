import { LogoProps } from "./Interfaces";
import Image from "../assets/img/Logo.png";

const Logo = ({ style }: LogoProps) => {
  return (
    <div className={`${style}`}>
      <img src={Image} className="w-12" />
    </div>
  );
};

export default Logo;
