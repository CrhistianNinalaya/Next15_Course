import NewsList from '@/components/NewsList/NewsList';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import { NextPage } from 'next';
import Link from 'next/link';
import { use } from 'react';

interface Params {
  filter: string[];
}

const FilteredNewsPage: NextPage<{ params: Promise<Params> }> = ({ params }) => {
  const { filter } = use(params);

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(Number(selectedYear));
    links = getAvailableNewsMonths(Number(selectedYear));
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(Number(selectedYear), Number(selectedMonth));
    links = [];
  }

  let newsContent = <p>No news found for the selected filter</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) ||
    (selectedMonth && !getAvailableNewsMonths(Number(selectedYear)).includes(Number(selectedMonth)))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );

  // const news = getNewsForYear(Number(year));

  // return <NewsList news={news} />;
};

export default FilteredNewsPage;
