// import React, { useState, useEffect } from 'react';

// // MUI
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import FormLabel from '@mui/material/FormLabel';
// import Typography from '@mui/material/Typography';

// import ProductCard from './Components/ProductCard'
// import { useLocation } from 'react-router';



// // {'face-moisturisers': [{'brand': 'azani active care',
// //    'name': 'unisex acne rescue cream - 30 ml',
// //    'price': '₹ 399',
// //    'url': 'https://www.myntra.com/face-moisturisers/azani-active-care/azani-active-care-unisex-acne-rescue-cream---30-ml/15322518/buy',
// //    'skin type': 'all',
// //    'concern': ['deep nourishment', 'acne', 'blemishes', 'dull skin']},

// const Products = {
    
//     skinCare:
//     {
//         'face-moisturisers':
//             [{
//                 'brand': 'azani active care',
//                 'name': 'unisex acne rescue cream - 30 ml',
//                 'price': '₹ 399',
//                 'url': 'https://www.myntra.com/face-moisturisers/azani-active-care/azani-active-care-unisex-acne-rescue-cream---30-ml/15322518/buy',
//                 'skin type': 'all',
//                 'concern': ['deep nourishment', 'acne', 'blemishes', 'dull skin']
//             },
//             {
//                 'brand': 'mamaearth',
//                 'name': 'vitamin c face milk with peach for skin illumination 100 ml',
//                 'price': '₹ 404',
//                 'url': 'https://www.myntra.com/face-moisturisers/mamaearth/mamaearth-vitamin-c-face-milk-with-peach-for-skin-illumination-100-ml/12411986/buy',
//                 'skin type': 'all',
//                 'concern': ['acne', 'blemishes', 'pigmentation', 'dull skin']
//             }]
//     },
//     makeUp:
//     {
//         'foundations':
//             [{
//                 'brand': 'wet n wild',
//                 'name': 'sustainable photo focus matte face primer - partners in prime',
//                 'price': '₹ 454',
//                 'url': 'https://www.myntra.com/foundation-and-primer/wet-n-wild/wet-n-wild-sustainable-photo-focus-matte-face-primer---partners-in-prime/12045988/buy',
//                 'skin type': 'normal',
//                 'skin tone': 'light to medium'
//             },
//             {
//                 'brand': 'faces canada',
//                 'name': 'ultime pro makeup fixer',
//                 'price': '₹ 486',
//                 'url': 'https://www.myntra.com/foundation-and-primer/faces-canada/faces-canada-ultime-pro-makeup-fixer/2421530/buy',
//                 'skin type': 'normal',
//                 'skin tone': 'light to medium'
//             }]
//     }
// }


// const Recommendations = () => {
//     const {state} = useLocation();
//     const {data} = state; 
//     const {general, makeup} = data;
//     return <>
//         <Container sx={{ marginTop: "2vh", padding: 1 }} alignitems="center" width="inherit">
//             <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center">
//                 Skin care
//             </Typography>
//             {Object.keys(general).map((type, products) => {
//                 return (<div><Typography gutterBottom variant="h5" component="div" marginTop="2vh" color="text.secondary">
//                             {type}
//                         </Typography>
//                         <Grid container spacing={1}>
//                     {general[type].slice(0,4).map((prod) => {
//                         return <Grid item xs={6} md={3}>
//                             <ProductCard
//                                 name={prod.name}
//                                 brand={prod.brand}
//                                 image={prod.img}
//                                 price={prod.price}
//                                 url={prod.url}
//                                 concern={prod.concern} />
//                         </Grid>
//                     })}
//                 </Grid></div>)
//             })}

//             <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center">
//                 Make up
//             </Typography>

//             <FormLabel component="legend">{ }</FormLabel>
//             {/* {Object.keys(Products.makeUp).map((type, products)=>{
//             return (<div><FormLabel component="legend">{type}</FormLabel><Grid container spacing={1}> */}
//             <div>
//             <Grid container spacing={1}>
//             {makeup.map((prod) => {
//                 return <Grid item xs={6} md={3}>
//                     <ProductCard
//                         name={prod.name}
//                         brand={prod.brand}
//                         image={prod.img}
//                         price={prod.price}
//                         url={prod.url}
//                         concern={prod.concern} />
//                 </Grid>
//             })}
//              </Grid></div>
//             {/* </Grid></div>) */}
//             {/* // })} */}
//         </Container>
//     </>
// };

// export default Recommendations;
// import React, { useState, useEffect } from 'react';

// // MUI
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import FormLabel from '@mui/material/FormLabel';
// import Typography from '@mui/material/Typography';
// import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';

// import ProductCard from './Components/ProductCard';
// import { useLocation } from 'react-router';

// // {'face-moisturisers': [{'brand': 'azani active care',
// //    'name': 'unisex acne rescue cream - 30 ml',
// //    'price': '₹ 399',
// //    'url': 'https://www.myntra.com/face-moisturisers/azani-active-care/azani-active-care-unisex-acne-rescue-cream---30-ml/15322518/buy',
// //    'skin type': 'all',
// //    'concern': ['deep nourishment', 'acne', 'blemishes', 'dull skin']},

// const Products = {
//     skinCare:
//     {
//         'face-moisturisers':
//             [{
//                 'brand': 'azani active care',
//                 'name': 'unisex acne rescue cream - 30 ml',
//                 'price': '₹ 399',
//                 'url': 'https://www.myntra.com/face-moisturisers/azani-active-care/azani-active-care-unisex-acne-rescue-cream---30-ml/15322518/buy',
//                 'skin type': 'all',
//                 'concern': ['deep nourishment', 'acne', 'blemishes', 'dull skin']
//             },
//             {
//                 'brand': 'mamaearth',
//                 'name': 'vitamin c face milk with peach for skin illumination 100 ml',
//                 'price': '₹ 404',
//                 'url': 'https://www.myntra.com/face-moisturisers/mamaearth/mamaearth-vitamin-c-face-milk-with-peach-for-skin-illumination-100-ml/12411986/buy',
//                 'skin type': 'all',
//                 'concern': ['acne', 'blemishes', 'pigmentation', 'dull skin']
//             }]
//     },
//     makeUp:
//     {
//         'foundations':
//             [{
//                 'brand': 'wet n wild',
//                 'name': 'sustainable photo focus matte face primer - partners in prime',
//                 'price': '₹ 454',
//                 'url': 'https://www.myntra.com/foundation-and-primer/wet-n-wild/wet-n-wild-sustainable-photo-focus-matte-face-primer---partners-in-prime/12045988/buy',
//                 'skin type': 'normal',
//                 'skin tone': 'light to medium'
//             },
//             {
//                 'brand': 'faces canada',
//                 'name': 'ultime pro makeup fixer',
//                 'price': '₹ 486',
//                 'url': 'https://www.myntra.com/foundation-and-primer/faces-canada/faces-canada-ultime-pro-makeup-fixer/2421530/buy',
//                 'skin type': 'normal',
//                 'skin tone': 'light to medium'
//             }]
//     }
// };

// const Recommendations = () => {
//     const { state } = useLocation();
//     const { data } = state;
//     const { general, makeup } = data;

//     // Slider Logic — Only added this block
//     const allPrices = [
//         ...Object.values(general).flat().map(p => parseInt(p.price.replace(/[^\d]/g, ''))),
//         ...makeup.map(p => parseInt(p.price.replace(/[^\d]/g, '')))
//     ];
//     const minPrice = Math.min(...allPrices);
//     const maxPrice = Math.max(...allPrices);
//     const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

//     const handlePriceChange = (event, newValue) => {
//         setPriceRange(newValue);
//     };

//     return <>
//         <Container sx={{ marginTop: "2vh", padding: 1 }} alignitems="center" width="inherit">
//             {/* ✅ Price Slider UI at top */}
//             <Box sx={{ width: 300, margin: "auto", mb: 4 }}>
//                 <Typography gutterBottom>
//                     Filter by Price: ₹{priceRange[0]} - ₹{priceRange[1]}
//                 </Typography>
//                 <Slider
//                     value={priceRange}
//                     onChange={handlePriceChange}
//                     valueLabelDisplay="auto"
//                     min={minPrice}
//                     max={maxPrice}
//                 />
//             </Box>

//             <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center">
//                 Skin care
//             </Typography>
//             {Object.keys(general).map((type, products) => {
//                 return (<div><Typography gutterBottom variant="h5" component="div" marginTop="2vh" color="text.secondary">
//                     {type}
//                 </Typography>
//                     <Grid container spacing={1}>
//                         {general[type].filter((prod) => {
//                             const price = parseInt(prod.price.replace(/[^\d]/g, ''));
//                             return price >= priceRange[0] && price <= priceRange[1];
//                         }).slice(0, 4).map((prod) => {
//                             return <Grid item xs={6} md={3}>
//                                 <ProductCard
//                                     name={prod.name}
//                                     brand={prod.brand}
//                                     image={prod.img}
//                                     price={prod.price}
//                                     url={prod.url}
//                                     concern={prod.concern} />
//                             </Grid>
//                         })}
//                     </Grid></div>)
//             })}

//             <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center">
//                 Make up
//             </Typography>

//             <FormLabel component="legend">{ }</FormLabel>
//             <div>
//                 <Grid container spacing={1}>
//                     {makeup.filter((prod) => {
//                         const price = parseInt(prod.price.replace(/[^\d]/g, ''));
//                         return price >= priceRange[0] && price <= priceRange[1];
//                     }).map((prod) => {
//                         return <Grid item xs={6} md={3}>
//                             <ProductCard
//                                 name={prod.name}
//                                 brand={prod.brand}
//                                 image={prod.img}
//                                 price={prod.price}
//                                 url={prod.url}
//                                 concern={prod.concern} />
//                         </Grid>
//                     })}
//                 </Grid></div>
//         </Container>
//     </>
// };

// export default Recommendations;
// import React, { useState, useEffect } from 'react';
// // MUI
// import {
//     Container, Grid, FormLabel, Typography, Slider, Box,
//     Select, MenuItem, Checkbox, ListItemText, InputLabel, OutlinedInput
// } from '@mui/material';
// import ProductCard from './Components/ProductCard';
// import { useLocation } from 'react-router';

// const Recommendations = () => {
//     const { state } = useLocation();
//     const { data } = state;
//     const { general, makeup } = data;

//     // ✅ Price Slider Logic
//     const allPrices = [
//         ...Object.values(general).flat().map(p => parseInt(p.price.replace(/[^\d]/g, ''))),
//         ...makeup.map(p => parseInt(p.price.replace(/[^\d]/g, '')))
//     ];
//     const minPrice = Math.min(...allPrices);
//     const maxPrice = Math.max(...allPrices);
//     const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

//     const handlePriceChange = (event, newValue) => {
//         setPriceRange(newValue);
//     };

//     // ✅ Brand Filter Logic (multi-select)
//     const allBrands = [...Object.values(general).flat(), ...makeup]
//         .map(p => p.brand.toLowerCase())
//         .filter((v, i, a) => a.indexOf(v) === i); // unique brands

//     const [selectedBrands, setSelectedBrands] = useState([]);

//     const handleBrandChange = (event) => {
//         const { value } = event.target;
//         setSelectedBrands(typeof value === 'string' ? value.split(',') : value);
//     };

//     const filterProducts = (product) => {
//         const price = parseInt(product.price.replace(/[^\d]/g, ''));
//         const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand.toLowerCase());
//         return price >= priceRange[0] && price <= priceRange[1] && brandMatch;
//     };

//     return (
//         <Container sx={{ marginTop: "2vh", padding: 1 }} alignitems="center" width="inherit">

//             {/* ✅ Price Slider UI */}
//             <Box sx={{ width: 300, margin: "auto", mb: 2 }}>
//                 <Typography gutterBottom>
//                     Filter by Price: ₹{priceRange[0]} - ₹{priceRange[1]}
//                 </Typography>
//                 <Slider
//                     value={priceRange}
//                     onChange={handlePriceChange}
//                     valueLabelDisplay="auto"
//                     min={minPrice}
//                     max={maxPrice}
//                 />
//             </Box>

//             {/* ✅ Multi-Select Brand Dropdown */}
//             <Box sx={{ width: 300, margin: "auto", mb: 4 }}>
//                 <FormLabel component="legend">Filter by Brands:</FormLabel>
//                 <Select
//                     multiple
//                     value={selectedBrands}
//                     onChange={handleBrandChange}
//                     input={<OutlinedInput label="Brands" />}
//                     renderValue={(selected) => selected.join(', ')}
//                     fullWidth
//                 >
//                     {allBrands.map((brand) => (
//                         <MenuItem key={brand} value={brand}>
//                             <Checkbox checked={selectedBrands.indexOf(brand) > -1} />
//                             <ListItemText primary={brand} />
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </Box>

//             {/* ✅ General Products */}
//             <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center">
//                 Skin care
//             </Typography>
//             {Object.keys(general).map((type) => (
//                 <div key={type}>
//                     <Typography gutterBottom variant="h5" component="div" marginTop="2vh" color="text.secondary">
//                         {type}
//                     </Typography>
//                     <Grid container spacing={1}>
//                         {general[type].filter(filterProducts).slice(0, 4).map((prod, index) => (
//                             <Grid item xs={6} md={3} key={index}>
//                                 <ProductCard
//                                     name={prod.name}
//                                     brand={prod.brand}
//                                     image={prod.img}
//                                     price={prod.price}
//                                     url={prod.url}
//                                     concern={prod.concern}
//                                 />
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </div>
//             ))}

//             {/* ✅ Makeup Products */}
//             <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center">
//                 Make up
//             </Typography>
//             <Grid container spacing={1}>
//                 {makeup.filter(filterProducts).map((prod, index) => (
//                     <Grid item xs={6} md={3} key={index}>
//                         <ProductCard
//                             name={prod.name}
//                             brand={prod.brand}
//                             image={prod.img}
//                             price={prod.price}
//                             url={prod.url}
//                             concern={prod.concern}
//                         />
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// };

// export default Recommendations;
import React, { useState } from 'react';
// MUI
import {
    Container, Grid, FormLabel, Typography, Slider, Box,
    Select, MenuItem, Checkbox, ListItemText, InputLabel, OutlinedInput
} from '@mui/material';
import ProductCard from './Components/ProductCard';
import { useLocation } from 'react-router';

const Recommendations = () => {
    const { state } = useLocation();
    const { data } = state;
    const { general, makeup } = data;

    // ✅ Price Slider Logic
    const allPrices = [
        ...Object.values(general).flat().map(p => parseInt(p.price.replace(/[^\d]/g, ''))),
        ...makeup.map(p => parseInt(p.price.replace(/[^\d]/g, '')))
    ];
    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    // ✅ Brand Filter Logic (multi-select)
    const allBrands = [...Object.values(general).flat(), ...makeup]
        .map(p => p.brand.toLowerCase())
        .filter((v, i, a) => a.indexOf(v) === i); // unique brands

    const [selectedBrands, setSelectedBrands] = useState([]);

    const handleBrandChange = (event) => {
        const { value } = event.target;
        setSelectedBrands(typeof value === 'string' ? value.split(',') : value);
    };

    const filterProducts = (product) => {
        const price = parseInt(product.price.replace(/[^\d]/g, ''));
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand.toLowerCase());
        return price >= priceRange[0] && price <= priceRange[1] && brandMatch;
    };

    return (
        <Container sx={{ marginTop: "2vh", padding: 3 }} alignitems="center" width="inherit">
            {/* ✅ Price Slider UI */}
            <Box sx={{ width: '80%', margin: "auto", mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Filter by Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                </Typography>
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => `₹${value}`}
                    min={minPrice}
                    max={maxPrice}
                    sx={{
                        color: '#1976d2',
                        '& .MuiSlider-rail': { backgroundColor: '#e0e0e0' },
                        '& .MuiSlider-track': { backgroundColor: '#1976d2' },
                        '& .MuiSlider-thumb': { backgroundColor: '#1976d2' }
                    }}
                />
            </Box>

            {/* ✅ Multi-Select Brand Dropdown */}
            <Box sx={{ width: '80%', margin: "auto", mb: 4 }}>
                <FormLabel component="legend" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    Filter by Brands:
                </FormLabel>
                <Select
                    multiple
                    value={selectedBrands}
                    onChange={handleBrandChange}
                    input={<OutlinedInput label="Brands" />}
                    renderValue={(selected) => selected.join(', ')}
                    fullWidth
                    sx={{
                        '& .MuiSelect-root': {
                            backgroundColor: '#f5f5f5',
                            borderRadius: '8px',
                            padding: '10px'
                        }
                    }}
                >
                    {allBrands.map((brand) => (
                        <MenuItem key={brand} value={brand}>
                            <Checkbox checked={selectedBrands.indexOf(brand) > -1} />
                            <ListItemText primary={brand.charAt(0).toUpperCase() + brand.slice(1)} />
                        </MenuItem>
                    ))}
                </Select>
            </Box>

            {/* ✅ General Products */}
            <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center" fontWeight="bold">
                Skin care
            </Typography>
            {Object.keys(general).map((type) => (
                <div key={type}>
                    <Typography gutterBottom variant="h5" component="div" marginTop="2vh" color="text.secondary" textAlign="center">
                        {type}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {general[type].filter(filterProducts).slice(0, 4).map((prod, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <ProductCard
                                    name={prod.name}
                                    brand={prod.brand}
                                    image={prod.img}
                                    price={prod.price}
                                    url={prod.url}
                                    concern={prod.concern}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ))}

            {/* ✅ Makeup Products */}
            <Typography gutterBottom variant="h4" component="div" marginTop="2vh" textAlign="center" fontWeight="bold">
                Make up
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {makeup.filter(filterProducts).map((prod, index) => (
                    <Grid item xs={6} md={3} key={index}>
                        <ProductCard
                            name={prod.name}
                            brand={prod.brand}
                            image={prod.img}
                            price={prod.price}
                            url={prod.url}
                            concern={prod.concern}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Recommendations;
