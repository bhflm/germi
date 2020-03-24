import { NextPage } from 'next';
import { TwitterTimeline } from '../components/Twitter';

const Home: NextPage<{ props: any }> = props => (
  <TwitterTimeline/>
);

export default Home;