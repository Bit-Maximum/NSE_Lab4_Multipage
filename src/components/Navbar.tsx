import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Drawer} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import React from "react";

interface ComponentProps {
    active: string;
}

interface MobileMenuProps extends ComponentProps {
    open: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: 'Главная', value: '1', path: "/"},
    { label: 'Список зданий', value: '2', path: "/list" },
    { label: 'Контакты', value: '3', path: "/" },
];

const StyledToolbar =styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main, // Используем тему MUI
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
    },
}));

const MobileMenu = ({ open, onClose, active }: MobileMenuProps) => {
    return (
        <Drawer anchor="top" open={open} onClose={onClose}>
            <Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton onClick={onClose} aria-label="Закрыть меню">
                        <CloseRoundedIcon/>
                    </IconButton>
                </Box>
                {menuItems.map((item) => (
                    <StyledLink to={item.path}>
                        <MenuItem key={item.value} onClick={onClose}
                                  sx={{
                                      ...(item.value === active && {
                                          variant: "contained",
                                          color: '#6d8aa8',
                                          backgroundColor: '#e1e1e1',
                                          weight: '600',
                                          '&:hover': {
                                              backgroundColor: '#4a6f8a',
                                          },
                                      }),
                                      variant: "text",
                                      '&:hover': {
                                          backgroundColor: '#f0f0f0',
                                          color: '#5d8aa8',
                                      },
                                  }}
                        >
                            {item.label}
                        </MenuItem>
                    </StyledLink>
                ))}
            </Box>
        </Drawer>
    );
};


function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые высокие здания и сооружения
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {menuItems.map((item) => (
                        <Link to={item.path}>
                            <Button key={item.label} color="info" size="medium"
                                variant={item.value === active ? 'contained' : 'text'}
                                sx={{
                                    ...(item.value === active && {
                                        variant: "contained",
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#4a6f8a',
                                        },
                                    }),
                                    variant: "text",
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                        color: '#5d8aa8',
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        </Link>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <IconButton aria-label="Открыть меню" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <MobileMenu open={open} onClose={toggleDrawer(false)}  active={active}/>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;