import React from 'react';
import { Stack } from '@mui/material'

// Um componente que implementa a "prateleira de livros" na página principal

class BookShelfItem extends React.Component
{
    render()
    {
        //console.log("BookShelf Item props:", this.props);
        return(
            <figure>
                <img src={this.props.coverImg} />
                <figcaption>{this.props.title}</figcaption>
            </figure>
        );
    }
}

class BookShelf extends React.Component
{
    render()
    {
        //console.log("BookShelf props:", this.props)
        return (
            <Stack direction="horizontal" style={{overflow: "scroll"}}>
                { this.props.books.map((book) => (
                    <div>
                        <BookShelfItem key={book.imageLink} coverImg={"/img/livros/" + book.imageLink} title={book.title} />
                    </div>
                ))}
            </Stack>
        );
    }
}

export default BookShelf;