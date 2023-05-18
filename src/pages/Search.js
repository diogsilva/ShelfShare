import React, { useState } from 'react';
import 'react-bootstrap';
//import for the search bar
import { Col, Container, Form, Row } from "react-bootstrap";

import "./Search.css";


import BookIcon from '@mui/icons-material/Book';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchComponent from '../Components/SearchComponent';
import { Stack } from '@mui/material';
import BookInfoDialog from '../Components/BookInfoDialog.jsx';

const bookData = require("../sample/books.json");
var filteredBooks = bookData;

// Search Screen

function filterBooks(query) {
  query = query.toLowerCase();

  var foundTitles = []
  var foundAuthors = []

  bookData.map((book) => {
    if (book.title.toLowerCase().includes(query))
      foundTitles.push(book);

    // if (book.author.includes(query))
    //   foundAuthors +=
  })
  filteredBooks = foundTitles;
  console.log("filtered books:", filteredBooks);
}

const Search = (props) => {
  const genres = ['Art', 'Biographies', 'Comics', 'Drama', 'Fiction'];
  const authors = ["Sally Ronney", "Kelly reid", "J.K Rowling", "Collen Hoover", "M.L.Rio"];
  const [value, setValue] = useState('');
  const handleChange = event => { setValue(event.target.value); filterBooks(value); }
  const [openAuthors, setOpenAuthors] = React.useState(true);
  const [openGenres, setOpenGenres] = React.useState(true);

  const [bookInfo,setBookInfo] = useState({});
  const [openBookInfo, setOpenBook] = useState(false);
  const handleClickOpenBookInfo = (info) => {
      setOpenBook(true);
      setBookInfo(info);
  };

  const handleClick = (val, setVal) => {
    setVal(!val);
  };



  return (
    <div className='Search_a'>

      <h1 >Search</h1>
      <Container className="mt" >
        <Row>
          <Col >
            <Form className="d">
              <SearchComponent value={value} onChange={handleChange} />
            </Form>
          </Col>
        </Row>
      </Container>

      {/* <List
        sx={{minWidth:'70%'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => handleClick(openGenres, setOpenGenres)}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Genres" />
          {openGenres ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openGenres} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {genres.map(genre => (<ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={genre} />
            </ListItemButton>))}

          </List>
        </Collapse>
        <ListItemButton onClick={() => handleClick(openAuthors, setOpenAuthors)}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Authors" />
          {openAuthors ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAuthors} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {authors.map(author => (<ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={author} />
            </ListItemButton>))}
          </List>
        </Collapse>
      </List> */}


      <List
        id="results"
        sx={{minWidth:'70%'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        { filteredBooks.map((b) => {
          const source = "/img/livros/" + b.imageLink;
          return (<>
            <BookInfoDialog key={"bookinfo " + b.title} bookInfo={bookInfo} open={openBookInfo} setOpen={setOpenBook} />
            <ListItemButton key={"list " + b.title} onClick={()=>handleClickOpenBookInfo({...b, source})}>
              <ListItemText>{b.title}</ListItemText>
            </ListItemButton>
          </>);
        }) }
      </List>
    </div>
  )
};

export default Search;