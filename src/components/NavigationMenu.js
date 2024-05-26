import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NavigationMenu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleMenuItemClick = (path) => {
        navigate(path);
        setDrawerOpen(false);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        {/* My Website */}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    <ListItem button onClick={() => handleMenuItemClick('/')}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => handleMenuItemClick('/form')}>
                        <ListItemText primary="Form" />
                    </ListItem>
                    <ListItem button onClick={() => handleMenuItemClick('/page3')}>
                        <ListItemText primary="Page 3" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default NavigationMenu;
