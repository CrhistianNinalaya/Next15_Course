import { News } from '@/dummy-news';
import Image from 'next/image';
import Link from 'next/link';


interface NewsListProps {
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.id}`}>
            <Image
              src={`/assets/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={300}
              height={200}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NewsList;
