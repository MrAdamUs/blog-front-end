import React, { useState, useEffect } from 'react';
import articaleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articaleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;
  const otherArt = articaleContent.filter((art) => art.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        upvotes={articleInfo.upvotes}
        articlesName={name}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <AddCommentForm />

      <CommentsList comments={articleInfo.comments} />

      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArt} />
    </>
  );
};

export default ArticlePage;
