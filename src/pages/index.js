import Head from 'next/head'
import { Navbar } from '../components/Navbar';

const Home = () => {
  return (
    <>
    <Head>
      <title>grmi notes</title>
    </Head>
    <Navbar/>
    <div>
      <h1 className="font-semibold ml-20 pt-20 text-left h-8 black">
        Hey there,
      </h1>
      <div className="font-small mt-16 ml-20 text-left h-9 black">
        <span>
          I'm a software developer from Buenos Aires, Argentina.
          <br></br>
          <br></br>
          Currently working as a remote contractor for <a className="font-semibold" target="_blank" href="https://grow.com">Grow</a>.
          <br></br>
          <br></br>
          Oh, yes, I do not have good taste for design at all, I'm working on improving that (for real).
          <br></br>
          <br></br>
          But I'm interested in backend, security, and blockchain stuff, (I find the latter pretty awesome tbh).
          <br></br>
          <br></br>
          If you want to talk, feel free to reach me <a className="font-semibold" href="mailto:germanbonin@gmail.com">here</a> anytime.
        </span>
      </div>
    </div>
    </>
  );
};

export default Home;
