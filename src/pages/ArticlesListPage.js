import React from 'react';
import articaleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articaleContent} />
    </>
  );
};

export default ArticlesListPage;
