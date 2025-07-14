import React, { useState } from 'react';
import {
    Box,
    Avatar,
    Typography,
    IconButton,
    Card,
    CardMedia,
    CardContent
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = ({ username, content, image, likes: initialLikes, comments: initialComments }) => {
    
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikes);
    
   
    const [showComments, setShowComments] = useState(false);
    const [commentCount, setCommentCount] = useState(initialComments);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    return (
        <Card sx={{
            maxWidth: 500,
            mb: 3,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            boxShadow: 'none'
        }}>
           
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderBottom: '1px solid #e0e0e0'
            }}>
                <Avatar sx={{
                    width: 40,
                    height: 40,
                    mr: 2,
                    bgcolor: 'primary.main',
                    border: '1px solid #e0e0e0'
                }}>
                    {username.charAt(0)}
                </Avatar>
                <Typography fontWeight="bold">@{username}</Typography>
                <IconButton sx={{ ml: 'auto' }}>
                    <MoreHorizIcon />
                </IconButton>
            </Box>

            {image && (
                <CardMedia
                    component="img"
                    height="500"
                    image={image}
                    alt={`Post by @${username}`}
                    sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid #f0f0f0'
                    }}
                />
            )}

            <CardContent sx={{ p: 2 }}>
                <Typography variant="body1" paragraph>
                    {content}
                </Typography>
            </CardContent>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderTop: '1px solid #f0f0f0'
            }}>
                <IconButton aria-label="like" onClick={handleLike}>
                    {isLiked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
                <Typography variant="body2" sx={{ mr: 2 }}>
                    {likeCount}
                </Typography>

                <IconButton aria-label="comment" onClick={handleCommentClick}>
                    <ChatBubbleOutlineIcon />
                </IconButton>
                <Typography variant="body2">
                    {commentCount}
                </Typography>
            </Box>

            {showComments && (
                <Box sx={{ p: 2, borderTop: '1px solid #f0f0f0' }}>
                    <Typography variant="body2" color="text.secondary">
                        Comments would appear here
                    </Typography>
                </Box>
            )}
        </Card>
    );
};

export default Post;