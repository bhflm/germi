import { NextPage } from 'next';
import { Navbar } from '../components/Navbar';

const Home: NextPage<{ props: any }> = props => (
  <>
  <Navbar/>
  <span>my site</span>
  </>
);

export default Home;