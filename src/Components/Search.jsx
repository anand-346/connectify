import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  Avatar,
  Divider,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { mockUsers, mockPosts } from './mockSearchData'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers([]);
      setFilteredPosts([]);
      return;
    }

    const userResults = mockUsers.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const postResults = mockPosts.filter(post =>
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(userResults);
    setFilteredPosts(postResults);
  }, [searchTerm]);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: { xs: 1, md: 3 } }}>
      <Paper elevation={0} sx={{ 
        p: 2, 
        mb: 3,
        border: '1px solid #e0e0e0'
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search CONNECTIFY..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
            ),
            sx: {
              borderRadius: 1,
              '& fieldset': {
                borderColor: '#000 !important'
              }
            }
          }}
        />
      </Paper>

      <Paper elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#000',
              height: 2
            }
          }}
        >
          <Tab label="Users" sx={{ fontWeight: 'bold', '&.Mui-selected': { color: '#000' } }} />
          <Tab label="Posts" sx={{ fontWeight: 'bold', '&.Mui-selected': { color: '#000' } }} />
        </Tabs>

        <Divider />

        <Box sx={{ p: 2 }}>
          {activeTab === 0 ? (
            <List>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <ListItem 
                    key={user.id} 
                    button
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                      }
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src={user.avatar} sx={{ border: '1px solid #000' }}>
                        {user.name.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={`@${user.username}`}
                      primaryTypographyProps={{ fontWeight: 'medium' }}
                    />
                    <Chip 
                      label="Follow" 
                      variant="outlined" 
                      sx={{ 
                        borderColor: '#000',
                        color: '#000',
                        '&:hover': {
                          backgroundColor: '#000',
                          color: '#fff'
                        }
                      }}
                    />
                  </ListItem>
                ))
              ) : (
                <Typography sx={{ p: 2, textAlign: 'center' }}>
                  {searchTerm ? 'No users found' : 'Search for users...'}
                </Typography>
              )}
            </List>
          ) : (
            <Box>
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <Paper 
                    key={post.id} 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      mb: 2,
                      border: '1px solid #e0e0e0'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar 
                        src={post.userAvatar} 
                        sx={{ 
                          width: 32, 
                          height: 32, 
                          mr: 1,
                          border: '1px solid #000'
                        }}
                      />
                      <Typography fontWeight="medium">@{post.username}</Typography>
                    </Box>
                    <Typography sx={{ mb: 1 }}>{post.content}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {post.likes} likes · {post.comments} comments
                    </Typography>
                  </Paper>
                ))
              ) : (
                <Typography sx={{ p: 2, textAlign: 'center' }}>
                  {searchTerm ? 'No posts found' : 'Search for posts...'}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Search;