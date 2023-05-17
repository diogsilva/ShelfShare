import React from 'react';
import { Stack } from '@mui/material'
import Grid from '@mui/material/Grid';

// Um componente que implementa a "prateleira de livros" na página principal

class BookShelfItem extends React.Component
{
    render()
    {
        //console.log("BookShelf Item props:", this.props);
        return(
            <Grid item alignItems={'center'} textAlign={"center"} xs={3}>
            <figure className="BookShelf-book">
                <img src={this.props.coverImg} className="BookShelf-book-cover" style={{height: this.props.picHeight}} />
                <figcaption className="BookShelf-book-title">{this.props.title}</figcaption>
            </figure>
            </Grid>
        );
    }
}

class BookShelf extends React.Component
{
    render()
    {
        console.log("BookShelf props:", this)
        return (
            <Grid container maxHeight={'700px'} overflow={'auto'} spacing={2}>
                { this.props.books.map((book) => (
                        <BookShelfItem key={book.imageLink} coverImg={"/img/livros/" + book.imageLink} title={book.title} picHeight={this.props.picHeight} />
                ))}
            </Grid>
        );
    }
}

export default BookShelf;