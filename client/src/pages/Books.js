import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    savedBooks: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ savedBooks: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  saveBook = data => {
    this.loadBooks();
    let exists = false;
    for(let i = 0; i < this.state.savedBooks.length; i++){
      if (this.state.savedBooks[i].title === data.volumeInfo.title){
        exists = true;
        break;
      }
    }
    if (exists === false){
    API.saveBook(data)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
      }; 
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getBook(this.state.title)
      .then(res =>{
      
        this.setState({ books: res.data.items, title: "", author: "", synopsis: "" });
      })
      .catch(err => console.log(err))
    };
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron></Jumbotron>
            <form>
            <div className="card-body border">
            <h4 className="d-flex justify-content-center card-title">Book Search</h4>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
              </div>
            </form>
          </Col>
              {this.state.books.length ? (
              <List>
                  {this.state.books.map(book => (
                    <ListItem key={book.id}>
                    <div>
                    <img className="float-left m-1" alt="" style={{height: "200px", width: "130px"}} src={book.volumeInfo.imageLinks.smallThumbnail}/>
                      <h4 className="card-title" style={{ marginleft: 0}}>{book.volumeInfo.title}</h4>
                      <h6 >Written By: {book.volumeInfo.authors}</h6>
                      <p className="card-text">{book.volumeInfo.description}</p>
                      <a className="float-none" href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary mr-2" type="button">
                          <i className="fa fa-folder-open"></i> View
                        </button>
                      </a>
                    <SaveBtn onClick={() => this.saveBook(book)} />
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

export default Books;
