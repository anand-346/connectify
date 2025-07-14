import React, { useState, useRef } from 'react';
import { 
  Fab, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  Button, 
  Box, 
  IconButton,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const FloatingAddButton = () => {
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPostContent('');
    setSelectedImage(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handlePost = () => {
    console.log('New post:', {
      content: postContent,
      image: selectedImage
    });
    handleClose();
  };

  return (
    <>
      <Fab
        aria-label="add"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 999,
          backgroundColor: 'black',
          color: 'white',
          '&:hover': { backgroundColor: '#333' }
        }}
      >
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ color: 'black' }}>Create New Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="What's on your mind?"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            sx={{ 
              mt: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'black',
              },
            }}
          />

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <IconButton 
              onClick={() => fileInputRef.current.click()}
              sx={{ color: 'black' }}
            >
              <AddPhotoAlternateIcon />
              <Typography variant="body2" sx={{ ml: 1, color: 'black' }}>
                {selectedImage ? 'Change Image' : 'Add Image'}
              </Typography>
            </IconButton>
          </Box>

          {selectedImage && (
            <Box sx={{ mt: 2 }}>
              <img 
                src={selectedImage} 
                alt="Preview" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '300px',
                  borderRadius: '8px'
                }} 
              />
            </Box>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button 
              onClick={handleClose} 
              sx={{ 
                mr: 1,
                color: 'black',
                borderColor: 'black',
                '&:hover': {
                  borderColor: 'black',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
              variant="outlined"
            >
              CANCEL
            </Button>
            <Button 
              onClick={handlePost} 
              sx={{ 
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#333',
                },
                '&:disabled': {
                  backgroundColor: '#e0e0e0',
                  color: '#9e9e9e'
                }
              }}
              variant="contained"
              disabled={!postContent.trim() && !selectedImage}
            >
              POST
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingAddButton;