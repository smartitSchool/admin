import React from 'react';
import { Box, Grid } from '@mui/material';
import './Home.css'
import ServiceTable from './ServiceTable/ServiceTable';

const Home = () => {


    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <ServiceTable />
                </Grid>
                <Grid item md={6}>
                    <p>siam</p>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;