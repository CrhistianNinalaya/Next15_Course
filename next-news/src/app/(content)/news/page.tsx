import NewsList from '@/components/NewsList/NewsList';
import { News as NewsInterface } from '@/interface/News';
import { getAllNews } from '@/lib/news';

const News = async () => {
  const news = (await getAllNews()) as NewsInterface[];
  return (
    <>
      <h1>News Page </h1>
      <NewsList news={news} />
    </>
  );
};

export default News;
