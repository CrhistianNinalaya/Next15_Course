import Link from 'next/link';

const MainHeader = () => {
  return (
    <header id="main-header">
      <h1 id="logo">
        <Link href="/">NextNews</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
