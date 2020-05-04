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
  posts?: Post[];
}

const Home: NextPage<HomeProps> = (posts) => {
  // dirty hack because im still trying to figure out wtf is going on here
  const postsData = Object.values(posts);
  console.log('posts data; ', postsData.map(each => console.log(each.name)));
  return (
    <>
    <Head>
      <title>grmi notes</title>
    </Head>
      {/* {postsData.map(each => (<p>{each.name}</p>))} */}
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
              const postInfo = { name: data.title };
              responseData.push(postInfo); 
            })
          }).catch(Promise.reject);
    return responseData as any; // i feel dirty and i need to solve this because i can't type good enough
};


export default Home;