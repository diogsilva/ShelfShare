import React, { useState } from 'react';
import { Stack } from '@mui/material'
import Grid from '@mui/material/Grid';
import BookInfoDialog from './BookInfoDialog';

// Um componente que implementa a "prateleira de livros" na página principal

const BookShelfItem = ({ book,picHeight,handleClickOpen }) => {
    const source = "../../public/img/livros/" + book.imageLink;
    //console.log("BookShelf Item props:", this.props);
    return (
        <Grid item alignItems={'center'} textAlign={"center"} xs={3}>
            <div onClick={()=>handleClickOpen({...book,source})}>
                <figure className="BookShelf-book">
                    <img src={source} className="BookShelf-book-cover" style={{ height: picHeight }} alt="BookShelf-book" />
                    <figcaption className="BookShelf-book-title">{book.title}</figcaption>
                </figure>
            </div>
        </Grid>
    ); 
}

const BookShelf = (props) => {
    const [bookInfo,setBookInfo] = useState({});
    const [open, setOpen] = useState(false);
    const handleClickOpen = (info) => {
        setOpen(true);
        setBookInfo(info);
    };
    return (<>
        <BookInfoDialog bookInfo={bookInfo} open={open} setOpen={setOpen} />
        <Grid container maxHeight={'700px'} overflow={'auto'} spacing={2}>
            {props.books.map((book) => (
                <BookShelfItem handleClickOpen={handleClickOpen} key={book.imageLink} book={book} picHeight={props.picHeight} />
            ))}
        </Grid>
    </>

    );
}

export default BookShelf;