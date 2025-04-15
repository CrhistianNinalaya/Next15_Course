import { ReactNode } from 'react';

const NewsDetailLayout = ({ children, modal }: { children: ReactNode; modal: ReactNode }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};
export default NewsDetailLayout;
