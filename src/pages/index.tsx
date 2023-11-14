import Head from 'next/head'
import { Navbar } from '../components/Navbar';

const Home = () => {
  return (
    <>
    <Head>
      <title>germi notes</title>
    </Head>
    <Navbar/>
    <div>
      <h1 className="font-semibold ml-20 pt-20 text-left h-8 black">
        Hey there!,
      </h1>
      <div className="font-small mt-16 ml-20 text-left h-9 black">
        <span>
          I'm a software engineer from Argentina. 
          <br></br>
          <br></br>
          I'm a huge decentralization and privacy enthusiast. All the things related to scaling systems and infosec fan. 
          <br></br>
          <br></br>
          Lately I've been experimenting with AI and doing some Go for fun.
          <br></br>
          <br></br>
          If you want to chat!, feel free to reach me <a className="font-semibold" href="mailto:germanbonin@gmail.com">here</a> anytime.
        </span>
      </div>
    </div>
    </>
  );
};

export default Home;
