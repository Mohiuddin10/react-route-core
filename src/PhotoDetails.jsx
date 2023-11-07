import { useLoaderData } from "react-router-dom";

const PhotoDetails = () => {
    const photoDetails = useLoaderData();
    console.log(photoDetails);
    return (
        <div className="text-center border border-[red] rounded-full m-4 p-4">
            <h2>{photoDetails.title}</h2>
            <img className="mx-auto" src={photoDetails.url} alt="" />
            
        </div>
    );
};

export default PhotoDetails;