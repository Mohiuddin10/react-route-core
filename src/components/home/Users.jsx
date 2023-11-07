import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Total user found: {users.length}</h2>
            
            { !users ? <span className="loading loading-ball loading-lg"></span> : <div className="grid grid-cols-3 gap-3">
            {
                users.map(user => 
                <User user = {user}
                key = {user.id}></User>)
            }
            </div>}
            
            
        </div>
    );
};

export default Users;