import { Link } from "react-router-dom";

const User = ({user}) => {
    return (
        <div className="border border-orange-500 shadow-lg m-2 p-2">
            <h2>{user.name}</h2>
            <h3>{user.phone}</h3>
            <h3>{user.email}</h3>
            <p>{user.address.street}, {user.address.suite}, {user.address.city}</p>
            <Link to={`/user/${user.id}`}><button className="btn glass">Show Details</button></Link>
        </div>
    );
};

export default User;