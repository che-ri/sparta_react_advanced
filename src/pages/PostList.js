// PostList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
//컴포넌트
import Post from "../components/Post";

const PostList = props => {
    const dispatch = useDispatch();
    const post_list = useSelector(state => state.post.list);

    useEffect(() => {
        dispatch(postActions.getPostFB());
    }, []);

    return (
        <React.Fragment>
            {post_list.map((post, idx) => {
                return <Post key={post.id} {...post} />;
            })}
        </React.Fragment>
    );
};

export default PostList;
