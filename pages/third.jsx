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
    a {
      color: darkcyan;
      font-size: 30px;
    }
  }
`;

const third = () => (
  <>
    <Head>
      <title>Third</title>
    </Head>
    <Wrap>
      <h2 style={{ marginRight: '50px' }}>Third Page!!</h2>
      <Link href="/">
        <Button>Go to Home!</Button>
      </Link>
      <Link href="/second">
        <Button>Go to Second!!!!!</Button>
      </Link>
    </Wrap>
  </>
);

export default third;
