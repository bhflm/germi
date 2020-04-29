import { NextPage } from 'next';
import { Navbar } from '../components/Navbar';

const Home: NextPage<{ props: any }> = props => (
  <>
  <Navbar/>
  </>
);

export default Home;