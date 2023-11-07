import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="m-4 p-4 flex gap-6">
                <Link to='/'>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts"><button className="btn btn-success">Posts</button></Link>
                <Link to='/photos'><button className="btn btn-warning">Photos</button></Link>
            </nav>
        </div>
    );
};

export default Header;