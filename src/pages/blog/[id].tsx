import { NextPage } from 'next';
import Head from 'next/head'
import { Layout } from '../../components/Layout';
import loadFirebaseClient from '../../clients/firebase';

interface Props {
  title?: string;
  tags?: string[];
  content?: string;
};


const PostTemplate: NextPage<Props> = ({ title, tags, content }) => (
  <div>
  <article>
    <h1>{title ? title : 'NO TITLE'}</h1>
    <span>
      {content ? content : 'NO CONTENT FOUND'}
    </span>
  </article>
  </div>
);

PostTemplate.getInitialProps = async ({ query }) => {
  let responseData = {};
  const postId = query?.id || '';
  const dbRef = await loadFirebaseClient();
  const querySnapshot = await dbRef.collection('posts');
  await querySnapshot.doc(`${postId}`).get()
        .then((snapshot) => {
          responseData = snapshot.data();
        }).catch(Promise.reject);
  console.log('response data; ', responseData);
  return responseData;
};


export default PostTemplate;