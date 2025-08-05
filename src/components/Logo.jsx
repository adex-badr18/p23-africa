import LogoImg from "../assets/logo.png";
import { Link } from "react-router";

const Logo = ({ width = "w-[62px]" }) => {
    return (
        <div className="flex-shrink-0">
            <Link to="/">
                <img src={LogoImg} alt="P23 Africa" className={`${width}`} />
            </Link>
        </div>
    );
};

export default Logo;
