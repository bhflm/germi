import { NextPage } from 'next';
import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Layout } from '../components/Layout';
import loadFirebaseClient from '../clients/firebase';

interface Post {
  title?: string,
  ref?: string,
};

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = (data) => {
  const posts = Object.values(data);
  return (
    <>
    <Head>
      <title>grmi notes</title>
    </Head>
    <Navbar/>
    <Layout />
    </>
  );
};

Home.getInitialProps = async () => {
  try {
    const dbRef = await loadFirebaseClient();
    const querySnapshots = await dbRef.collection('home').get();
    const responseData = querySnapshots.docs.map(snap => snap.data().title);
    return responseData as any;
  } catch (err) {
    console.error(err);
  }
};


export default Home;