import { NextPage } from 'next';
import Head from 'next/head'
import { Layout } from '../../components/Layout';
import db from '../../clients/firebase';

interface Props {
  title?: string;
  tags?: string[];
  content?: string;
};


const PostTemplate: NextPage<Props> = ({ title, tags, content }) => (
  <div>
  <article>
    <h1>{title}</h1>
    <span>
      {content}
    </span>
  </article>
  </div>
);

PostTemplate.getInitialProps = async ({ query }) => {
  let resData = {};
  const dbRef = db.collection('posts');
  await dbRef.doc('first-post').get().then( snapshot => {
    resData = snapshot.data();
  })
  console.log('RES DATA; ', resData);
  return resData;
};


export default PostTemplate;