import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message'; 
import { Badge, IconButton, Menu, MenuItem, Typography } from '@mui/material';

export default function Header() {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [notifications] = useState([
        "New connection request",
        "3 new messages"
    ]);
    

    const [messages] = useState([
        " John: Hey man..!",
        " Gahda: Reacted",
        " Anand: Bye......"
    ]);
    const [messageAnchorEl, setMessageAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleMessageOpen = (event) => {
        setMessageAnchorEl(event.currentTarget);
    };
    
    const handleMessageClose = () => {
        setMessageAnchorEl(null);
    };

    return (
        <header className="header-container">
            <h1>CONNECTIFY</h1>
            <div style={{
                position: 'absolute',
                right: '40px',
                top: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
            }}> 
               
                <IconButton onClick={handleOpen} sx={{ color: 'black', marginTop: '50px' }}> 
                    <Badge badgeContent={notifications.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton 
                    onClick={handleMessageOpen} 
                    sx={{ color: 'black', marginTop: '50px' }}
                >
                    <Badge badgeContent={messages.length} color="error">
                        <MessageIcon />
                    </Badge>
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{ style: { width: '300px' } }}
                >
                    <Typography sx={{ p: 2, fontWeight: 'bold' }}>Notifications</Typography>
                    {notifications.map((note, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                            <Typography variant="body2">{note}</Typography>
                        </MenuItem>
                    ))}
                </Menu>

                <Menu
                    anchorEl={messageAnchorEl}
                    open={Boolean(messageAnchorEl)}
                    onClose={handleMessageClose}
                    PaperProps={{ style: { width: '300px' } }}
                >
                    <Typography sx={{ p: 2, fontWeight: 'bold' }}>Messages</Typography>
                    {messages.map((message, index) => (
                        <MenuItem key={index} onClick={handleMessageClose}>
                            <Typography variant="body2">{message}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </header>
    );
}