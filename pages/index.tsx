import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import { getAllPosts } from '../lib/posts-util';
import AllPosts from '../components/posts/AllPosts';
import Layout from '../components/layout/layout';
import { Post } from '../types/Post';

const Home: NextPage = () => {
  const { data, isLoading, isFetching } = useQuery<Post[]>(
    'allPosts',
    getAllPosts
  );
  return (
    <Fragment>
      <Head>
        <title>Overreacted — A blog by Dan Abramov</title>
        <meta
          name='description'
          content='Personal blog by Dan Abramov. I explain with words and code.'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        ></meta>
      </Head>
      <Layout>
        <AllPosts posts={data} loading={isLoading} />
      </Layout>
    </Fragment>
  );
};
export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Post[]>('allPosts', getAllPosts);

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}
