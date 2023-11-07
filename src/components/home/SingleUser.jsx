import { useLoaderData } from "react-router-dom";

const SingleUser = () => {
    const userDetails = useLoaderData();
    return (
        <div className="text-center">
            <h2 className="text-6xl font-semibold text-[tomato]">Details of {userDetails.name}</h2>
            <p>Phone: {userDetails.phone}</p>
        </div>
    );
};

export default SingleUser;