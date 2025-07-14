import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Settings = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [settings, setSettings,] = useState({
    darkMode: false,
    notifications: true,
    email: 'johny123@gmail.com',
    username: 'Johny',
    privacy: 'public',
    profilePic: null
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSettings({...settings, profilePic: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ 
      maxWidth: 800,
      mx: 'auto',
      p: 3,
      minHeight: '60vh'
    }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Profile Settings
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar
          src={settings.profilePic}
          sx={{ 
            width: 80, 
            height: 80, 
            mr: 3,
            border: '2px solid #000'
          }}
        />
        <Box>
          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            sx={{ 
              textTransform: 'none',
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                borderColor: '#333'
              }
            }}
          >
            Change Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            JPG, GIF or PNG. Max size 2MB
          </Typography>
        </Box>
      </Box>

      <TextField
        fullWidth
        label="Username"
        value={settings.username}
        onChange={(e) => setSettings({...settings, username: e.target.value})}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Email"
        type="email"
        value={settings.email}
        onChange={(e) => setSettings({...settings, email: e.target.value})}
        sx={{ mb: 3 }}
      />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Privacy Settings
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Profile Visibility</InputLabel>
        <Select
          value={settings.privacy}
          onChange={(e) => setSettings({...settings, privacy: e.target.value})}
          label="Profile Visibility"
        >
          <MenuItem value="public">Public</MenuItem>
          <MenuItem value="friends">Friends Only</MenuItem>
          <MenuItem value="private">Private</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Switch
            checked={settings.notifications}
            onChange={() => setSettings({...settings, notifications: !settings.notifications})}
          />
        }
        label="Email Notifications"
        sx={{ mb: 2, display: 'block' }}
      />

      
      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Account Actions
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <Button
          variant="outlined"
          sx={{ 
            borderColor: '#000',
            color: '#000',
            '&:hover': {
              borderColor: '#ff0000',
              color: '#ff0000'
            }
          }}
        >
          Change Password
        </Button>
        <Button
          variant="outlined"
          sx={{ 
            borderColor: '#000',
            color: '#000',
            '&:hover': {
              borderColor: '#ff0000',
              color: '#ff0000'
            }
          }}
        >
          Deactivate Account
        </Button>
      </Box>
      <div>
         <button 
        onClick={() => setShowAbout(!showAbout)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        About
      </button>

      {showAbout && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          maxWidth: '400px'
        }}>
          <h3>About Connectify</h3>
          <p>Connectify is a social networking platform designed to help you connect with friends, 
              share moments, and discover new communities. Our mission is to bring people together 
              in a safe and engaging environment.</p>
          <p>Version: 1.0.0<br/>
             Developed by:Connectify Team,<br/>
             Release Date:July 2025
          </p>
          <button 
            onClick={() => setShowAbout(false)}
            style={{
              padding: '5px 10px',
              marginTop: '10px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Close
          </button>
        </div>
      )}
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#000',
            color: '#fff',
            px: 4,
            '&:hover': {
              bgcolor: '#333'
            }
          }}
          onClick={() => alert('Settings saved!')}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};


export default Settings;