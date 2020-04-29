import { NextPage } from 'next';
import { Navbar } from '../components/Navbar';
import { Layout } from '../components/Layout';

const Home: NextPage<{ props: any }> = props => (
  <>
  <Navbar/>
  <Layout />
  </>
);

export default Home;