import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Post } from '../../../types/Post';
import ChangeTheme from '../../layout/ChangeTheme';
import classes from './PostContent.module.css';

type IProps = {
  post: Post | undefined;
  loading: boolean;
  prevPost: Post | undefined;
  nextPost: Post | undefined;
};
const PostContent: FunctionComponent<IProps> = ({
  post,
  loading,
  prevPost,
  nextPost,
}) => {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <header className={classes.header}>
        <h3 className={classes.logoWrapper}>
          <Link className={classes.logo} href='/'>
            Overreacted
          </Link>
        </h3>
        <ChangeTheme />
      </header>
      {loading && !post && <div>Loading...</div>}
      {!loading && !post && <div>No data!</div>}
      {!loading && post && (
        <>
          <article className={classes.content}>
            <h1 className={classes.title}>{post.title}</h1>
            <p className={classes.date}>
              {formattedDate} • ☕️ {Math.ceil(post.body.length / 10)} min read
            </p>
            <p>{post.body}</p>
          </article>
          <div
            className={classes.linkWrapper}
            style={{
              justifyContent:
                !prevPost || !nextPost ? 'flex-end' : 'space-between',
            }}
          >
            {prevPost && (
              <Link href={`${prevPost.id}`}>
                {prevPost.title.substring(0, 15)}
              </Link>
            )}
            {nextPost && (
              <Link href={`${nextPost.id}`}>
                {nextPost.title.substring(0, 15)}
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PostContent;
