import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import AppleLogo from '../IMG/Logo_apple.png';
import GoogleLogo from '../IMG/Logo_google.png';

export default function BasicButtons() {
    return (
        <Stack spacing={2} style={{ display: 'grid', justifyContent: 'center' }}>
        <Button
            variant="contained"
            style={{
            width: '20rem',
            backgroundColor: '#fff',
            fontFamily: 'iner',
            color: 'black',
            borderRadius: '20px',
            }}
            startIcon={
            <ListItemIcon>
                <img src={AppleLogo} alt="Apple Logo" style={{ width: '20px' }} />
            </ListItemIcon>
            }
        >
            Sign In with Apple
        </Button>
        <Button
            variant="contained"
            style={{
            width: '20rem',
            backgroundColor: '#fff',
            fontFamily: 'iner',
            color: 'black',
            borderRadius: '20px',
            }}
            startIcon={
            <ListItemIcon>
                <img src={GoogleLogo} alt="Google Logo" style={{ width: '45px', marginLeft:'-.4rem' }} />
            </ListItemIcon>
            }
        >
            Sign In with Google
        </Button>
        </Stack>
    );
}