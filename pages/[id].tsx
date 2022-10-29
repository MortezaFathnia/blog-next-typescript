import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import Layout from '../components/layout/layout';
import PostContent from '../components/posts/post-detail/PostContent';
import { getAllPosts, getPostData } from '../lib/posts-util';
import { Post } from '../types/Post';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const postId =
    typeof router.query?.id === 'string' ? parseInt(router.query.id) : 0;

  const {
    isLoading: loadingPost,
    error: errorPost,
    data: postData,
  } = useQuery(['post', postId], () => getPostData(postId), {
    enabled: postId > 0,
  });
  const {
    isLoading: loadingPrevPost,
    error: errorPrevPost,
    data: postPrevData,
  } = useQuery(['prevPost', postId - 1], () => getPostData(postId - 1), {
    enabled: postId > 1,
  });

  const {
    isLoading: loadingNextPost,
    error: errorNextPost,
    data: postNextData,
  } = useQuery(['nextPost', postId + 1], () => getPostData(postId + 1), {
    enabled: postId > 0,
  });

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
      <Layout color='pink'>
        <PostContent
          post={postData}
          loading={loadingPost}
          prevPost={postPrevData}
          nextPost={postNextData}
        />
      </Layout>
    </Fragment>
  );
};

export default PostDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const postId = parseInt(context.params?.id as string);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Post>(['post', postId], () =>
    getPostData(postId)
  );
  if (postId > 1) {
    await queryClient.prefetchQuery<Post>(['prevPost', postId - 1], () =>
      getPostData(postId)
    );
  }

  await queryClient.prefetchQuery<Post>(['nextPost', postId + 1], () =>
    getPostData(postId)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
