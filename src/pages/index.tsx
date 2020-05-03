import { NextPage } from 'next';
import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Layout } from '../components/Layout';

interface Props {
  query?: string;
};


const Home: NextPage<Props> = query => (
  <>
  <Head>
    <title>grmi notes</title>
  </Head>
  <Navbar/>
  <Layout />
  </>
);

Home.getInitialProps = async ({ query }) => {
  let resData = {};
  // TODO 
  // STRUCTURE POSTS DATA TO FETCH A LIST SO WE AVOID NESTED ACCESS FOR POSTS LIST
  return resData;
};


export default Home;