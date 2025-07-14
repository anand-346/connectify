import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Divider,
  Button,
  IconButton,
  TextField,
  Paper
} from '@mui/material';
import {
  Edit,
  PhotoCamera,
  GridOn,
  BookmarkBorder,
  PersonAdd
} from '@mui/icons-material';

const ProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Johny',
    username: '@johny69',
    bio: 'Gamer | Car enthusiast | Dare To Live',
    posts: 24,
    followers: 1432,
    following: 567
  });

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 1, md: 3 } }}>
      <Paper elevation={0} sx={{ p: 3, mb: 3, border: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          
          <Box sx={{ position: 'relative', alignSelf: 'center' }}>
            <Avatar 
              sx={{ 
                width: 120, 
                height: 120, 
                border: '3px solid #000',
                fontSize: '2.5rem'
              }}
            >
              AJ
            </Avatar>
            <IconButton 
              sx={{ 
                position: 'absolute', 
                bottom: 0, 
                right: 0,
                bgcolor: 'white',
                border: '1px solid #000'
              }}
            >
              <PhotoCamera fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
              mb: 2
            }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {profile.name}
              </Typography>
        
              <Button 
                variant="outlined" 
                startIcon={<PersonAdd />}
                sx={{ 
                  borderColor: '#000',
                  color: '#000',
                  ml: 'auto'
                }}
              >
                Follow
              </Button>
            </Box>

            {editMode ? (
              <TextField
                fullWidth
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                multiline
                rows={3}
                sx={{ mb: 2 }}
              />
            ) : (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {profile.bio}
              </Typography>
            )}

            <Box sx={{ display: 'flex', gap: 3 }}>
              <Typography>
                <strong>{profile.posts}</strong> posts
              </Typography>
              <Typography>
                <strong>{profile.followers}</strong> followers
              </Typography>
              <Typography>
                <strong>{profile.following}</strong> following
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Paper elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
        <Tabs 
          value={tabValue} 
          onChange={(e, newValue) => setTabValue(newValue)}
          variant="fullWidth"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#000',
              height: 2
            }
          }}
        >
          <Tab 
            icon={<GridOn />} 
            label="POSTS" 
            sx={{ 
              fontWeight: 'bold',
              '&.Mui-selected': { color: '#000' } 
            }} 
          />
          <Tab 
            icon={<BookmarkBorder />} 
            label="SAVED" 
            sx={{ 
              fontWeight: 'bold',
              '&.Mui-selected': { color: '#000' } 
            }} 
          />
        </Tabs>
        <Divider />
        <Box sx={{ p: 2, minHeight: 300 }}>
          {tabValue === 0 ? (
            <Typography textAlign="center" sx={{ pt: 4 }}>
              Your posts will appear here
            </Typography>
          ) : (
            <Typography textAlign="center" sx={{ pt: 4 }}>
              Saved posts collection
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;