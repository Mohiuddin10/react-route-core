import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { title, userId } = post;
    return (
        <div className="border border-[tomato] rounded-2xl m-4 p-4 flex flex-col">
            <div className="flex-grow">
                <p>{title}</p>
            </div>
            <Link to={`/posts/${post.id}`}><button className="btn btn-warning">Details</button></Link>
        </div>
    );
};

export default Post;