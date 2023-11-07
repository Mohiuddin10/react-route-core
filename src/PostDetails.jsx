import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {title, body} = postDetails;
    return (
        <div className="text-center border border-[tomato] m-4 p-4 rounded-3xl">
            <h3 className="text-3xl text-[red]">Title: {title}</h3>
            <p className="text-2xl text-[green]">{body}</p>
        </div>
    );
};

export default PostDetails;