import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
    <Stack spacing={2} style={{display:'grid', justifyContent:'center'}}>
        <Button variant="contained" style={{width:'20rem', backgroundColor:'#fff', fontFamily:'iner', color:'black', borderRadius:'20px'}}>Sign In with Apple</Button>
        <Button variant="contained" style={{width:'20rem', backgroundColor:'#fff', fontFamily:'iner', color:'black', borderRadius:'20px'}}>Sign In with Google</Button>

    </Stack>
);
}