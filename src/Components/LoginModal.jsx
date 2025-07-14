import React from 'react'
import { Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const LoginModal = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                width: '300px',
                position: 'relative'
            }}>
                <Typography variant='h5' style={{ color: '#000000' }}>LOG IN</Typography>
                <form>
                    <TextField 
                        variant='filled' 
                        label='Username/Email' 
                        fullWidth 
                        margin='normal' 
                    />
                    <TextField 
                        variant='outlined' 
                        label='Password' 
                        type='password' 
                        fullWidth 
                        margin='normal' 
                    />
                    <Button 
                        variant='contained' 
                        color='primary' 
                        type='submit'
                        fullWidth
                    >
                        LOG IN
                    </Button>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Button variant='text' color='primary'>
                            <Link to={'/f'}>FORGOT PASSWORD</Link>
                        </Button>
                        <Button variant='text' color='primary'>
                            <Link to={'/s'}>SIGN UP</Link>
                        </Button>
                    </div>
                </form>
                <Button 
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        minWidth: 'auto'
                    }}
                >
                    ×
                </Button>
            </div>
        </div>
    )
}

export default LoginModal