import { NextPage } from 'next';
import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Layout } from '../components/Layout';

const Home: NextPage<{ props: any }> = props => (
  <>
  <Head>
    <title>grmi notes</title>
  </Head>
  <Navbar/>
  <Layout />
  </>
);

export default Home;