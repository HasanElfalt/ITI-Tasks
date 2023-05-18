import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            The Page is Not Found — <strong>check it out!</strong>
        </Alert>
    );
};

export default NotFound;