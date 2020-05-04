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
  posts?: Array<Post>[];
}

const Home: NextPage<HomeProps> = (data) => {
  const posts = data as Array<any> // dont tell anyone i did this
  return (
    <>
    <Head>
      <title>grmi notes</title>
    </Head>
      {posts.map(each =>(<p>{each.title}</p>))}
    <Navbar/>
    <Layout />
    </>
  );
};

Home.getInitialProps = async () => {
    let responseData = [];
    const dbRef = await loadFirebaseClient();
    const querySnapshot = await dbRef.collection('home');
    await querySnapshot.get()
          .then((snapshot) => {
            snapshot.forEach(snap => {
              const data = snap.data();
              console.log('DATA; ', data);
              const postInfo = { name: data.name, ref: data.ref };
              responseData.push(postInfo); 
            })
          }).catch(Promise.reject);
    return responseData as unknown; // i feel dirty and i need to solve this because i can't type good enough
};


export default Home;