import React from 'react';

// Um componente que implementa a "prateleira de livros" na página principal

class BookShelfItem extends React.Component
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <img src={this.props.bookCoverImgUrl} />
                <p>{this.props.bookTitle}</p>
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
        console.log("BookShelf props:", this.props)
        return (
            this.props.books.forEach(book => {
                <div>
                    <BookShelfItem bookCoverImgUrl={book.coverImg} bookTitle={book.title} />
                </div>
            })
        );
    }
}

export default BookShelf;