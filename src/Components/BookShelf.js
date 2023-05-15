import React from 'react';
import { Stack } from '@mui/material'

// Um componente que implementa a "prateleira de livros" na página principal

class BookShelfItem extends React.Component
{
    render()
    {
        //console.log("BookShelf Item props:", this.props);
        return(
            <figure className="BookShelf-book">
                <img src={this.props.coverImg} className="BookShelf-book-cover" style={{height: this.props.picHeight}} />
                <figcaption className="BookShelf-book-title">{this.props.title}</figcaption>
            </figure>
        );
    }
}

class BookShelf extends React.Component
{
    render()
    {
        console.log("BookShelf props:", this)
        return (
            <Stack direction="horizontal" className="BookShelf-container" style={{overflow: "scroll"}}>
                { this.props.books.map((book) => (
                    <div>
                        <BookShelfItem key={book.imageLink} coverImg={"/img/livros/" + book.imageLink} title={book.title} picHeight={this.props.picHeight} />
                    </div>
                ))}
            </Stack>
        );
    }
}

export default BookShelf;