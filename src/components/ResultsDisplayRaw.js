import { Box } from '@mui/material';
import React from 'react';

const ResultsDisplayRaw = ({ results }) => {
    return (
        <Box sx={{ marginTop: 2 }}>
            <Box component="pre" sx={{ textAlign: 'left', whiteSpace: 'pre-wrap', wordBreak: 'break-word', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                {JSON.stringify(results, null, 2)}
            </Box>
        </Box>
    );
};

export default ResultsDisplayRaw;
