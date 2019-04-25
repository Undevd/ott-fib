import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            The page you want is in another castle!
            <Link to="/">Try looking here</Link>
        </div>
    );
};