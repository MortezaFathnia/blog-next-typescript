
import axios from 'axios';

export async function getAllPosts() {

  const allPosts = await axios.get('https://jsonplaceholder.typicode.com/posts/')

  return allPosts.data;
}

export async function getPostData(id: number | null) {

  const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return post.data;
  
}