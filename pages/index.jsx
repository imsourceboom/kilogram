import Head from 'next/head';
// import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`;

const Index = (props) => (
  <>
    <Head>
      <title>Home!!!!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <Title>Home</Title>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Link href="/second">
          <a style={{ marginRight: '30px' }}>Go to second page</a>
        </Link>
        <Link href="/third">
          <a>Go to third page</a>
        </Link>
      </div>
      <h2>{props.shows}</h2>
    </div>
  </>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Index;
