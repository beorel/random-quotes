import React from 'react';


const Quotes = (props) => {
    return (
        <div color={props.color} border={"50px solid blue"} >
            {props.quote}
            {props.author}
        </div>
    )
}

export default Quotes;