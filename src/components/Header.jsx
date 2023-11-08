import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="m-4 p-4 flex gap-6">
                <Link to='/'>Home</Link>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                
                <NavLink to="/posts"><button className="btn btn-success">Posts</button></NavLink>
                <Link to='/photos'><button className="btn btn-warning">Photos</button></Link>
            </nav>
        </div>
    );
};

export default Header;