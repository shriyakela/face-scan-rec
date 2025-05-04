// import React,{useState} from 'react';
// import { UploadImage } from '../controllers/actions'
// import {useNavigate} from 'react-router-dom';

// import WebcamCapture from './Components/webCam'

// // MUI
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import Button from '@mui/material/Button';

// function ImageInput() {
//     const [landingPage, setLandingPage] = useState(true)
//     const [imageSrc, setImageSrc] = useState(null)
//     const navigate = useNavigate();
//     if(imageSrc !== null) {
//         console.log("we got an image")
//         UploadImage(imageSrc, navigate)
//     }

//     return (
//         <>
//             <Container maxWidth="xs" sx={{padding: 0}} alignitems="center">
//                 <Grid container justify="center" sx={{maxHeight:"100vh"}} spacing={1}>
//                     {landingPage ? 
//                         <Grid item xs={6} sx={{margin:"40vh auto"}} textAlign="center">
//                             <PhotoCameraIcon sx={{fontSize:"5em"}}/>    
//                             <Button 
//                                 onClick={() => {setLandingPage(false)}} 
//                                 variant="contained"
//                                 fullWidth>
//                                 Take a photo
//                             </Button>
//                         </Grid>:
//                         <WebcamCapture setImageSrc={setImageSrc}/>
//                     }
//                 </Grid>   
//             </Container>
//         </>
//     )
// }

// export default ImageInput
// import React, { useState } from 'react';
// import { UploadImage } from '../controllers/actions';
// import { useNavigate } from 'react-router-dom';
// import WebcamCapture from './Components/webCam';

// // MUI
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function ImageInput() {
//     const [landingPage, setLandingPage] = useState(true);
//     const [imageSrc, setImageSrc] = useState(null);
//     const navigate = useNavigate();

//     if (imageSrc !== null) {
//         console.log("we got an image");
//         UploadImage(imageSrc, navigate);
//     }

//     return (
//         <Container maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <Grid container spacing={2} justifyContent="center" alignItems="center">
//                 {landingPage ? (
//                     <Grid item xs={12}>
//                         <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
//                             <Box mb={2}>
//                                 <PhotoCameraIcon sx={{ fontSize: '6rem', color: 'primary.main' }} />
//                             </Box>
//                             <Typography variant="h5" gutterBottom>
//                                 Ready to Snap?
//                             </Typography>
//                             <Button
//                                 onClick={() => setLandingPage(false)}
//                                 variant="contained"
//                                 size="large"
//                                 fullWidth
//                                 sx={{ mt: 2 }}
//                             >
//                                 Take a Photo
//                             </Button>
//                         </Paper>
//                     </Grid>
//                 ) : (
//                     <WebcamCapture setImageSrc={setImageSrc} />
//                 )}
//             </Grid>
//         </Container>
//     );
// }

// export default ImageInput;
import React, { useState } from 'react';
import { UploadImage } from '../controllers/actions';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from './Components/webCam';

// MUI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ImageInput() {
    const [landingPage, setLandingPage] = useState(true);
    const [imageSrc, setImageSrc] = useState(null);
    const navigate = useNavigate();

    if (imageSrc !== null) {
        console.log("we got an image");
        UploadImage(imageSrc, navigate);
    }

    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative', 
        }}>
            {/* Content */}
            <Container
                maxWidth="xs" // Keeps the content at the same narrow width
                sx={{
                    height: '100vh', // Ensures the container takes up the full height of the screen
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative', // Keeps content above the background
                    zIndex: 1, // Ensures content is above the background
                }}
            >
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {landingPage ? (
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                                <Box mb={2}>
                                    <PhotoCameraIcon sx={{ fontSize: '6rem', color: 'primary.main' }} />
                                </Box>
                                <Typography variant="h5" gutterBottom>
                                    Ready to Snap?
                                </Typography>
                                <Button
                                    onClick={() => setLandingPage(false)}
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Take a Photo
                                </Button>
                            </Paper>
                        </Grid>
                    ) : (
                        <WebcamCapture setImageSrc={setImageSrc} />
                    )}
                </Grid>
            </Container>
        </div>
    );
}

export default ImageInput;
