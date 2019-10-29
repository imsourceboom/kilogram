import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Link from 'next/link';

const Home = () => (
    <>
        <Head>
            <title>Home!</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div>
            <h1 className="title">HOME</h1>
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                <Link href="/second">
                    <a style={{ marginRight: '30px' }}>Go to second page</a>
                </Link>
                <Link href="/third">
                    <a>Go to third page</a>
                </Link>
            </div>
        </div>

        <ul></ul>

        <style jsx>{`
            .title {
                margin: 0;
                width: 100%;
                padding-top: 80px;
                line-height: 1.15;
                font-size: 48px;
                text-align: center;
            }
        `}</style>
    </>
);

export default Home;
