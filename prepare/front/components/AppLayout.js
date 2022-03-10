import React from 'react';
import Link from 'next/link';
// CSS
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return (
    <Wrapper>
      <Link href="/">
        <button type="button">AppLayout</button>
      </Link>
      <Link href="/postsPage">
        <button type="button">postsPage</button>
      </Link>
      <Children>
        <div>{children}</div>
      </Children>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 3%;
`;
const Children = styled.div`
  margin-top: 3%;
`;
