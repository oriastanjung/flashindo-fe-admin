/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link
      to={props.href}
      className={`${props.isActive ? "text-bluePrimary font-bold" : "font-medium"} flex items-center gap-1 `}
    >
      {" "}
      {/* <img src={props.icon} alt="icon" /> {props.title} */}
      {props.icon} {props.title}
    </Link>
  );
}

export default NavLink;
