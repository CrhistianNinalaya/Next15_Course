import NewsList from '@/components/NewsList/NewsList';
import { News } from '@/interface/News';
import { getLatestNews } from '@/lib/news';

const LatestNewsPage = async () => {
  const latestNews = (await getLatestNews()) as News[];
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
};
export default LatestNewsPage;
