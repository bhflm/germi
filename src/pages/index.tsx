import { NextPage } from 'next';
import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Layout } from '../components/Layout';
import db from '../clients/firebase';

interface Props {
  query?: string;
};


const Home: NextPage<Props> = query => (
  <>
  <Head>
    {console.log('RES DATA: ', query)}
    <title>grmi notes</title>
  </Head>
  <Navbar/>
  <Layout />
  </>
);

Home.getInitialProps = async ({ query }) => {
  console.log('QUERY: ', query);
  let resData = {};
  const dbRef = db.collection('posts');
  await dbRef.doc('posts').get().then( snapshot => {
    resData = snapshot.data();
  })

  return resData;
};


export default Home;