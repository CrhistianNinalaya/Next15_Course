import { News } from '@/interface/News';
import { getNewsItem } from '@/lib/news';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export interface Params {
  id: string;
}

const NewsDetailsPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  console.log('Fetching news item with ID:', id);
  const newsItem = (await getNewsItem(id)) as News;

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem?.id}/image`}>
          <Image
            src={`/assets/images/news/${newsItem?.image}`}
            alt={newsItem?.title ?? ''}
            width={112}
            height={112}
          />
        </Link>
        <h2>{newsItem?.title}</h2>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
