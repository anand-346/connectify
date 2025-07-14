import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreatePost = ({ onCreatePost }) => {
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPostContent('');
  };

  const handleSubmit = () => {
    if (postContent.trim()) {
      onCreatePost(postContent);
      handleClose();
    }
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 999
        }}
      >
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Create New Post</DialogTitle>
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
            sx={{ mt: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              variant="contained" 
              color="primary"
              disabled={!postContent.trim()}
            >
              Post
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePost;