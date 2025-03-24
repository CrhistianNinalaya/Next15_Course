import Link from 'next/link';
import NavLink from '../NavLink/NavLink';

const MainHeader = () => {
  return (
    <header id="main-header">
      <h1 id="logo">
        <Link href="/">NextNews</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
