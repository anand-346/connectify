import React, { useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import PostsContainer from './PostsContainer'; 
import FloatingAddButton from './FloatingAddButton'; 

const Home = () => {
  const [trendingTopics] = useState([
    { id: 1, name: "SocialMedia", postCount: "12.4K" },
    { id: 2, name: "TechUpdate", postCount: "8.2K" },
    { id: 3, name: "WebDesign", postCount: "5.7K" },
    { id: 4, name: "Connectify", postCount: "3.9K" },
    { id: 5, name: "DigitalLife", postCount: "2.1K" }
  ]);

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px', position: 'relative' }}>
      <div style={{ flex: 2 }}>
        <PostsContainer />
      </div>
      <div style={{ flex: 1 }}>
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Trending Now
          </Typography>
          <Box sx={{ mt: 2 }}>
            {trendingTopics.map((topic, index) => (
              <Box
                key={topic.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  py: 1.5,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  '&:last-child': { borderBottom: 'none' }
                }}
              >
                <Typography sx={{ 
                  fontWeight: 'bold',
                  minWidth: 30,
                  color: 'text.primary'
                }}>
                  {index + 1}
                </Typography>
                <Box sx={{ ml: 1.5, flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: 'medium' }}>
                    #{topic.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {topic.postCount} posts
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </div>
      <FloatingAddButton />
    </div>
  );
};

export default Home;