import { ReactNode } from 'react';

const ArchiveLayout = ({
  archive,
  latest,
}: {
  archive: ReactNode;
  latest: ReactNode;
}) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="latest-news">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
