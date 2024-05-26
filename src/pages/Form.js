import { Box, Container, Grid } from '@mui/material';
import React, { useState } from 'react';

import ResultsDisplayRaw from '../components/ResultsDisplayRaw'
import UserForm from '../components/UserForm'
import axios from 'axios';

const FormPage = () => {
    const [results, setResults] = useState(null);

    const handleSubmit = async (data) => {
        try {
            const response = await axios.post('https://your-api-endpoint.com/submit', data);
            setResults(response.data);
        } catch (error) {
            console.error('Error submitting form', error);
            setResults({ error: 'Error submitting form' });
        }
    };

    return (
        <Container>
            <Box sx={{ marginTop: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <UserForm onSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {results && <ResultsDisplayRaw results={results} />}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default FormPage;
