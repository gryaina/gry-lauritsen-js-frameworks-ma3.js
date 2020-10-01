import React from 'react';
import Heading from '../layout/Heading';
import NewsList from '../layout/NewsList';

export function News() {
  return (
    <>
      <Heading title="News" />
      <NewsList />
    </>
  );
}

export default News;
