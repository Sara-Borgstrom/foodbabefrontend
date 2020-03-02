import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

interface Props {
  id: string;
}

const CommentOnPost: React.FC<Props> = ({ id }) => {
  const [commentText, setCommentText] = useState();

  const onSubmit = () => {
    console.log(`Posting comment (${commentText}) on post ${id} to backend `);
    // TODO send to backend api
    setCommentText("");
  };

  return (
    <div>
      Comment on {id}
      <textarea
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
      />
      <button onClick={onSubmit}>POST COMMENT!</button>
    </div>
  );
};

export default CommentOnPost;
