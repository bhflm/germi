import { NextPage } from 'next';
import { TwitterTimeline } from '../components/Twitter';

const Home: NextPage<{ props: any }> = props => (
  // <TwitterTimeline/> not gonna use this atm
  <div>
    welcome!
  </div>
);

export default Home;