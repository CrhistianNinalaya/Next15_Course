import NewsList from '@/components/NewsList/NewsList';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import Link from 'next/link';
import { Suspense } from 'react';
interface Params {
  filter: string[];
}

const FilterHeader = async ({ year, month }: { year?: string; month?: string }) => {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }
  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const linkKey = typeof link === 'object' && 'date' in link ? link.date : link;
            const href = year ? `/archive/${year}/${linkKey}` : `/archive/${linkKey}`;
            return (
              <li key={linkKey}>
                <Link href={href}>{linkKey}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }: { year?: string; month?: string }) => {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
};

const FilteredNewsPage = async ({ params }: { params: Promise<Params> }) => {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter header...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );

  // const news = getNewsForYear(Number(year));

  // return <NewsList news={news} />;
};

export default FilteredNewsPage;
