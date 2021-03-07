import React, { useState } from 'react';

const AddCommentForm = ({ articalesName, setArticleInfo }) => {
  const [username, setUsernam] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articalesName}/comments`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsernam('');
    setCommentText('');
  };
  return (
    <div id='add-comment-form'>
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsernam(e.target.value)}
        />
      </label>

      <label>
        Comment:
        <textarea
          rows='4'
          cols='50'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button onClick={() => addComment()}>Add a comment</button>
    </div>
  );
};

export default AddCommentForm;
