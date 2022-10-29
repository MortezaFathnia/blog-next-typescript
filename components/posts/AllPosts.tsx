import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Post } from '../../types/Post';
import ChangeTheme from '../layout/ChangeTheme';
import classes from './AllPosts.module.css';
import PostItem from './PostItem';
type IProps = {
  posts: Post[] | undefined;
  loading: boolean;
};
const AllPosts: FunctionComponent<IProps> = ({ posts, loading }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logoWrapper}>
          <Link className={classes.logo} href='/'>
            Overreacted
          </Link>
        </h1>
        <ChangeTheme />
      </header>
      <div className={classes.posts}>
        <div className={classes.postHeader}>
          <Image
            src='/images/site/profile.jpg'
            alt='profile'
            width={60}
            height={60}
          />
          <p>
            Personal blog by{' '}
            <Link href='https://mobile.twitter.com/dan_abramov'>
              Dan Abramov
            </Link>
            . I&nbsp;explain with words and code.
          </p>
        </div>
        {loading && !posts && <div>Loading...</div>}
        {!loading && !posts && <div>No data!</div>}
        {!loading && posts && (
          <ul className={classes.grid}>
            {posts.map((post: Post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default AllPosts;
