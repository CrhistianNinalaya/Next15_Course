'use client';
import { DUMMY_NEWS } from '@/dummy-news';
import { NextPage } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface Params {
  id: string;
}

const NewsDetailsPage: NextPage<{ params: Promise<Params> }> = ({ params }) => {
  const { id } = use(params);

  const newsItem = DUMMY_NEWS.find((news) => news?.id === id);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Image
          src={`/assets/images/news/${newsItem?.image}`}
          alt={newsItem?.title ?? ''}
          width={112}
          height={112}
        />
        <h2>{newsItem?.title}</h2>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
