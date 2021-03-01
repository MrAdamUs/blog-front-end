import React from 'react';
import articaleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articaleContent.find((article) => article.name === name);
  if (!article) return <NotFoundPage />;
  const otherArt = articaleContent.filter((art) => art.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <hr />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArt} />
    </>
  );
};

export default ArticlePage;
