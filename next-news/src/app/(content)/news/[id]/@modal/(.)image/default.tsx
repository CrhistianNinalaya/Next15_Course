import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Params } from '../../page';
import ModalBackdrop from '@/components/ModalBackdrop/ModalBackdrop';
import { getNewsItem } from '@/lib/news';
import { News } from '@/interface/News';

const InterceptedImagePage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const newsItem = (await getNewsItem(id)) as News;

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/assets/images/news/${newsItem?.image}`}
            width={1024}
            height={1024}
            alt={newsItem?.title ?? ''}
          />
        </div>
      </dialog>
    </>
  );
};
export default InterceptedImagePage;
