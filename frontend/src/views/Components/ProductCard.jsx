import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const unavailableImage = process.env.PUBLIC_URL + '/unavailable.png';

export default function ProductCard({ name = "cream", price = 2000, brand = "brand", url = "https://www.myntra.com/", concern = [], image = '' }) {
    const redirectProduct = () => {
        window.location.replace(url);
    };

    concern = [...new Set(concern)];

    return (
        <Box onClick={redirectProduct} sx={{ cursor: "pointer" }}>
            <Card sx={{ maxWidth: "50vw" }}>
                <CardMedia
                    component="img"
                    height="200px"
                    image={image || unavailableImage}
                    alt="Product image"
                />
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">
                            {brand}
                        </Typography>
                        <Typography variant="body2" color="text.primary" fontWeight="bold">
                            ₹{price}
                        </Typography>
                    </Box>
                    <Typography gutterBottom variant="h6" component="div">
                        {name.length > 40 ? name.substring(0, 40) + "..." : name}
                    </Typography>
                    <Grid container spacing={1}>
                        {concern.filter(n => n).map((concernItem, idx) => (
                            <Grid item key={idx}>
                                <Typography
                                    variant="body2"
                                    color="white"
                                    sx={{
                                        backgroundColor: "info.main",
                                        borderRadius: "5%",
                                        px: "8px",
                                        py: "2px",
                                        mr: "8px"
                                    }}
                                >
                                    {concernItem}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}
