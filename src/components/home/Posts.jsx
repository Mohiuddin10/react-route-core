import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <>
            <h3 className="text-center text-[tomato]">Total {posts.length} posts found</h3>
            <div className="grid grid-cols-4 gap-4 m-3 p-3">
                {
                    posts.map(post => <Post post={post}
                        key={post.id}></Post>)
                }
            </div>
        </>
    );
};

export default Posts;