import NewsList from '@/components/NewsList/NewsList';
import { News } from '@/interface/News';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import Link from 'next/link';
interface Params {
  filter: string[];
}

const FilteredNewsPage = async ({ params }: { params: Promise<Params> }) => {
  const { filter } = await params;
  console.log('Filter params:', filter);
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = (await getAvailableNewsYears()) as News[];

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const linkKey = typeof link === 'object' && 'date' in link ? link.date : link;
              const href = selectedYear
                ? `/archive/${selectedYear}/${linkKey}`
                : `/archive/${linkKey}`;
              return (
                <li key={linkKey}>
                  <Link href={href}>{linkKey}</Link>
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
