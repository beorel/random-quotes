import React from 'react';


const Quotes = (props) => {
    return (
        <div color={props.color} border={"50px solid blue"} >
            {props.quote}
            <br></br>
            <p style={{ textAlign: "right" }}>
                <b >{props.author}</b>
            </p>


        </div>
    )
}

export default Quotes;