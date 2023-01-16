import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import QuoteWrapper from './quoteWrapper';

const Quotes = (props) => {
    return (
        <div color={props.color}>
            {props.quote}
            {props.author}
            {props.color}
        </div>
    )
}

export default Quotes;