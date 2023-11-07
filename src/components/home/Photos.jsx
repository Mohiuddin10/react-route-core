import { useLoaderData } from "react-router-dom";
import Photo from "./Photo";


const Photos = () => {
    const photos = useLoaderData();
    return (
        <div>
            <h3>Photos: {photos.length}</h3>
            <div className="grid grid-cols-6 gap-4 text-center justify-center">
                {
                    photos.map(photo => <Photo photo = {photo}
                    key = {photo.id}></Photo>)
                }
            </div>
            
        </div>
    );
};

export default Photos;