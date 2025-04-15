import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { Params } from '../page';

const ImagePage = ({ params }: { params: Promise<Params> }) => {
  const { id } = use(params);

  const newsItem = DUMMY_NEWS.find((news) => news?.id === id);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <Image
        src={`/assets/images/news/${newsItem?.image}`}
        width={1024}
        height={1024}
        alt={newsItem?.title ?? ''}
      />
    </div>
  );
};
export default ImagePage;
