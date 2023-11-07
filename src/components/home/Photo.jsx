import { Link } from "react-router-dom";

const Photo = ({photo}) => {
    const {id, thumbnailUrl} = photo;
    return (
        <div className="border border-[green] text-center m-3 p-3 mx-auto">
            <h3>{id}</h3>
            <img src={thumbnailUrl} alt="" />
            <Link to={`/photo/${id}`}><button className="btn">Details</button></Link>
        </div>
    );
};

export default Photo;