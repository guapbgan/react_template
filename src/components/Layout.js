import { Link, Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Layout() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>
        </div>
    );
}

export default Layout;
