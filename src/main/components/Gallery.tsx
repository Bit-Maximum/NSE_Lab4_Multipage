import structures from "../../data";
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/material/Container";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {styled} from "@mui/material/styles";

const imgData=structures.slice(0, -1);

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main, // Используем тему MUI
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
        opacity: '90%'
    },
}));


function Gallery() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ height: 585, overflowY: 'scroll', m: '20px auto'}}>
                <ImageList
                    variant="masonry"
                    sx={{
                        columnCount: {
                            xs: '1 !important',
                            sm: '2 !important',
                            md: '3 !important',
                            lg: '4 !important',
                        },
                    }}
                    gap={8}>
                    {imgData.map((item, index) => (
                        <StyledLink key={ index } to={ "/building/" + index }>
                            <ImageListItem key={item.img}>
                                    <img
                                        srcSet={ item.img }
                                        src={ item.img }
                                        alt={ item.title }
                                        loading="lazy"
                                    />
                                    <ImageListItemBar position="bottom" title={ item.title } />
                            </ImageListItem>
                        </StyledLink>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

export default Gallery;