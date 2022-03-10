import React from 'react';
import Link from 'next/link';
// CSS
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return (
    <Wrapper>
      <Link href="/">
        <button>AppLayout</button>
      </Link>
      <Link href="/postsPage">
        <button>postsPage</button>
      </Link>
      <div className="children">{children}</div>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.div`
  margin-top: 3%;
  text-align: center;
  .children {
    margin-top: 3%;
  }
`;
