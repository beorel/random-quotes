import React from "react";
import Quotes from "./quote";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { blue, green, yellow, cyan, purple, red, grey } from "@mui/material/colors";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';

class QuoteWrapper extends React.Component {
    constructor(props) {
        super(props);
        const quote1 = "Find out what you like doing best, and get someone to pay you for doing it. - By: Katharine Whitehorn"
        const quote2 = "If opportunity doesn\'t knock, build a door. - By:  Milton Berle"
        const quote3 = "The future depends on what you do today. - By:  Mahatma Gandhi"
        const quote4 = "Opportunities don\'t happen, you create them. - By: Chris Grosser"
        const quote5 = "The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. - By:  Steve Jobs"
        const quote6 = "Whatever you decide to do, make sure it makes you happy. - By: Paulo Coelho"
        const quote7 = "If you\'re offered a seat on a rocket ship, don\'t ask what seat! Just get on. - By: Sheryl Sandberg"
        const quote8 = "A mind that is stretched by new experiences can never go back to its old dimensions. - By:  Oliver Wendell Holmes, JR."
        const quote9 = "When the grass looks greener on the other side of the fence, it may be that they take better care of it there. - By:  Cecil Selig"
        const quote10 = "Luck is what happens when preparation meets opportunity. - By:  Seneca"

        this.quoteArray = [];
        this.quoteArray.push(quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10)

        const color1 = blue[100]
        const color2 = green[50]
        const color3 = yellow[100]
        const color4 = cyan[100]
        const color5 = purple[100]
        const color6 = red[100]
        this.colorArray = [];
        this.colorArray.push(color1, color2, color3, color4, color5, color6);

        this.state = {
            quote: "",
            author: "",
            color: grey[50]
        }
    }

    RandomIndex = () => {
        let randomDec = Math.random() * this.quoteArray.length
        let randomInt = Math.floor(randomDec);
        return (randomInt)
    }

    RandomColorIndex = () => {
        let randomColorDec = Math.random() * this.colorArray.length;
        let randomColorInt = Math.floor(randomColorDec);
        let printingColorFromIndex = this.colorArray[randomColorInt]
        return (printingColorFromIndex)
    }
  
    UpdateQuote = () => {
        let quoteWithAuthorToArray = this.quoteArray[this.RandomIndex()]
        let splittedRandomQuotes = quoteWithAuthorToArray.split("-");
        let splittedQuote = splittedRandomQuotes[0];
        let splittedAuthor = splittedRandomQuotes[1];
        this.setState({
            quote: splittedQuote,
            author: splittedAuthor,
            color: this.RandomColorIndex()
        })
    }

    componentDidMount = () => {
        this.UpdateQuote();
    }
    
    ThemeColor = () => createTheme({
        palette: {
            neutral: {
                main: this.state.color,
                contrastText: '#fff',
            },   
        },  
    });
    
    render() {
        return (
            // <div>
            // <Card border={"50px solid blue"}>
                <CardContent sx={{ backgroundColor: this.state.color, border:"1px solid red" }}>
                
                    <Typography>
                        {/* <Box sx={{ flexGrow: 1 }} > */}
                        <Box>
                            <Grid container spacing={4} columnSpacing={{ xs: 6, sm: 2, md: 3 }} marginTop={"180px"} marginBottom={"150px"}>
                                <Grid xs={3}></Grid>
                                <Grid xs={6} border={"1px solid red"} bgcolor={"white"}>
                                    <Quotes quote={this.state.quote}
                                        author={this.state.author}
                                        color={this.state.color} />
                                    <ThemeProvider theme={this.ThemeColor()}>
                                        <Button id="new-quote" onClick={this.UpdateQuote} variant="contained" color="neutral">New Quote</Button>
                                    </ThemeProvider>
                                </Grid>
                                <Grid xs={3}></Grid>
                            </Grid>
                        </Box>
                    </Typography>
                </CardContent>
            // </Card>
            // </div>
        )
    }
}

export default QuoteWrapper