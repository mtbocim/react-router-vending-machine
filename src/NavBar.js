import {Link} from "react-router-dom";


function NavBar(){
    return(
        <nav>
            <Link to="/coffee">Coffee </Link>
            <Link to="/chocolate">Chocolate </Link>
            <Link to="/doughnuts">Doughnuts </Link>
        </nav>
    )

}


export default NavBar;