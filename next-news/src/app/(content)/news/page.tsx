import NewsList from '@/components/NewsList/NewsList';
import { DUMMY_NEWS } from '@/dummy-news';

const News: React.FC = () => {
  return (
    <>
      <h1>News Page </h1>
      <NewsList news={DUMMY_NEWS} />;
    </>
  );
};

export default News;
