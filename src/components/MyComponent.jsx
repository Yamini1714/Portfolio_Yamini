import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function MyComponent() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>My Portfolio</title>
            </Helmet>
        </HelmetProvider>
    );
}

export default MyComponent;
