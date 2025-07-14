import React from 'react';
import Post from './Post';
import { Box } from '@mui/material'; 

const PostsContainer = () => {
  const posts = [
    {
      id: 1,
      username: 'Gadha',
      content: 'I love Nature !',
      image: '/images/gadha-post.jpg',
      likes: 6,
      comments: 'Comment'
    },
    {
      id: 2,
      username: 'Anand',
      content: 'Wounds Will Heal but Scars Remain',
      image: '/images/anand-post.jpg',
      likes: 15,
      comments: 'Comment'
    },
    
    {
      id: 3,
      username: 'Madara',
      content: 'Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain. suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well. As long as there is a concept of victors, the vanquished will also exist. The selfish intent of wanting to preserve peace, initiates war. and hatred is born in order to protect love. There are nexuses causal relationships that cannot be separated - Madara Uchiha',
      likes: 99,
      comments: 'Comment'
    },
    {
      id: 4,
      username: 'Jess',
      content: 'Play Time....',
      image: '/images/jess-post.jpg',
      likes: 19,
      comments: 'Comment'
    }
  ];

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', p: 2 }}>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          content={post.content}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </Box>
  );
};

export default PostsContainer;