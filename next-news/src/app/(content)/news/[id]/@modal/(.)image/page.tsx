"use client"
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { use } from 'react';
import { Params } from '../../page';

const InterceptedImagePage = ({ params }: { params: Promise<Params> }) => {
  const { id } = use(params);
  const router = useRouter();  

  const newsItem = DUMMY_NEWS.find((news) => news?.id === id);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}>
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
      </div>
    </>
  );
};
export default InterceptedImagePage;
