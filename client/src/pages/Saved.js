import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>{
        this.setState({ books: res.data})
      }
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron></Jumbotron>
          </Col>
              {this.state.books.length ? (
              <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                    <div>
                    <img className="float-left m-1" alt="" style={{height: "200px", width: "130px"}} src={book.image}/>
                      <h4 className="card-title" style={{ marginleft: 0}}>{book.title}</h4>
                      <h6 >Written By: {book.author}</h6>
                      <p className="card-text">{book.description}</p>
                      <a className="float-none" href={book.link} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-success mr-2" type="button">
                          <i className="fa fa-folder-open"></i> View
                        </button>
                      </a>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </div>
                      </ListItem>
                     ))}
                  </List>
                      ) : (
                      <h3>No Results to Display</h3>
                      )}
                  </Row>
      </Container>
    );
  }
}

export default Saved;
