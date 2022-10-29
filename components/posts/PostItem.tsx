import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Post } from '../../types/Post';

import classes from './PostItem.module.css';

interface IProps {
  post: Post;
}

const PostItem: FunctionComponent<IProps> = (props) => {
  const { title, body, id } = props.post;
  const formattedDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={classes.post}>
      <h3>
        <Link href={`/${id}`}>{title}</Link>
      </h3>
      <small className={classes.date}>
        {formattedDate} • ☕️ {Math.ceil(body.length / 10)} min read
      </small>
      <p>{body}</p>
    </li>
  );
};
export default PostItem;
