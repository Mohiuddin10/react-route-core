import { useLoaderData, useNavigate } from "react-router-dom";

const PhotoDetails = () => {
    const photoDetails = useLoaderData();
    const navigate = useNavigate();
    console.log(photoDetails);
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className="text-center border border-[red] rounded-full m-4 p-4">
            <h2>{photoDetails.title}</h2>
            <img className="mx-auto" src={photoDetails.url} alt="" />
            <button onClick={handleGoBack} className="btn btn-info">Go back</button>
            
        </div>
    );
};

export default PhotoDetails;