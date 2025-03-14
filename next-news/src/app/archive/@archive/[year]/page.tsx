import NewsList from '@/components/NewsList/NewsList';
import { getNewsForYear } from '@/lib/news';
import { NextPage } from 'next';

import { use } from 'react';

interface Params {
  year: string;
}

const FilteredNewsPage: NextPage<{ params: Promise<Params> }> = ({
  params,
}) => {
  const { year } = use(params);
  const news = getNewsForYear(Number(year));

  return <NewsList news={news} />;
};

export default FilteredNewsPage;
