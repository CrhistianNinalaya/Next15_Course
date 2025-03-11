import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import Link from 'next/link';

const News: React.FC = () => {
  return (
    <ul className="news-list">
      {DUMMY_NEWS.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.id}`}>
            <Image
              src={`/assets/images/news/${news.image}`}
              alt={news.title}
              width={300}
              height={200}
            />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default News;
