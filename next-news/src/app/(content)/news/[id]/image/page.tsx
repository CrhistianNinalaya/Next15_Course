import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Params } from '../page';
import { getNewsItem } from '@/lib/news';
import { News } from '@/interface/News';

const ImagePage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;

  const newsItem = (await getNewsItem(id)) as News;

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
