import React from 'react';

const AddCommentForm = () => {
  return (
    <div id='add-comment-form'>
      <label>
        Name:
        <input type='text' />
      </label>

      <label>
        Comment:
        <textarea rows='4' cols='50' />
      </label>
      <button>Add a comment</button>
    </div>
  );
};

export default AddCommentForm;
