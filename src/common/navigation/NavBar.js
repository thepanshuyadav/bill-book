import "../../styles/Navbar.css"
import {NavLink} from "react-router-dom";
import {NAV_BAR_DATA} from "../../utils/constants";

export const NavBar = () => {
    return (
        <>
            {NAV_BAR_DATA.map(({icon, title, link}) => (

                <NavLink to={link}
                         key={title}
                         className={({isActive}) =>
                             "Nav-link" + (!isActive ? "" : "-selected")}
                >
                    <button>
                        {icon}<p>{title}</p>
                    </button>

                </NavLink>
            ))}
        </>
    )
}