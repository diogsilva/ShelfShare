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
        console.log("BookShelf Item props:", this.props);
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
        console.log("BookShelf props:", this.props)
        return (
            //<BookShelfItem bookCoverImgUrl={this.props.books[0].coverImg} bookTitle={this.props.books[0].title} />
            this.props.books.map((book) => (
                <div>
                    <BookShelfItem coverImg={"/img/livros/" + book.imageLink} title={book.title} />
                </div>
            ))
        );
    }
}

export default BookShelf;