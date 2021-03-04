import React from 'react';

const UpvotesSection = ({ upvotes, setArticleInfo, articlesName }) => {
  const handelClick = async () => {
    const resulte = await fetch(`/api/articles/${articlesName}/upvote`, {
      method: 'POST',
    });

    const body = await resulte.json();
    setArticleInfo(body);
  };

  return (
    <div id='upvotes-section'>
      <button onClick={() => handelClick()}>Add vote</button>
      <p>This post has been upvoted {upvotes}</p>
    </div>
  );
};

export default UpvotesSection;
