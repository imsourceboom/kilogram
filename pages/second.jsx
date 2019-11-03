import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.a`
  color: red;
  font-size: 30px;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & {
    h1 {
      margin-right: 50px;
    }
  }
`;

const Second = () => (
  <>
    <Head>
      <title>Second</title>
    </Head>
    <Wrap>
      <h1>Second Page</h1>
      <Link href="/">
        <Button>Go to Home!!</Button>
      </Link>
      <Link href="/third">
        <Button>Go to third!!</Button>
      </Link>
    </Wrap>
  </>
);

export default Second;
