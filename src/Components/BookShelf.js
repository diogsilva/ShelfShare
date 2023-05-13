import React from 'react';
import { Stack } from '@mui/material'

// Um componente que implementa a "prateleira de livros" na página principal

class BookShelfItem extends React.Component
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        //console.log("BookShelf Item props:", this.props);
        return(
            <div>
                <img src={this.props.coverImg} />
                <p>{this.props.title}</p>
            </div>
        );
    }
}

class BookShelf extends React.Component
{
    constructor(props) 
    {
        super(props);
    }

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