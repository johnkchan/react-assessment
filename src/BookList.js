import React, { Component } from 'react'

const buttonStyle = {
    backgroundColor: "#4471E8"
}

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           books: [],
           input: ""
        };
    }

    handleTop10 = (e) => {
        e.preventDefault();

        fetch('./BookList.JSON')
            .then(res => res.json())
            .then(json => {
                for (let i = 0; i < json.results.length; i++) {
                    this.setState({
                        books: [...this.state.books, json.results[i].title]
                    })
                }
            })
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleAdd = (e) => {
        e.preventDefault();

        this.setState({
            books: [...this.state.books, this.state.input]
        });
    }
   
    handleDelete = (e) => {
        let index = parseInt(e.target.id);
        this.state.books.splice(index, 1);
        this.setState({
            books: this.state.books
        });
    }

    render() {
      
        return (
            <div className="bookListMain">
                <div className="header">
                <form>
                    <input onChange={this.handleChange} placeholder="Book" />
                    <button onClick={this.handleAdd}>
                        Add Book
                    </button>
                    <button onClick={this.handleTop10}> Get Top 10 Books by Ken Follet</button>
                </form>
                </div>
                <ol>
                    {this.state.books.map((book, index) => (
                        <>
                            <li key={index}>{book}
                                <button 
                                    id={index} 
                                    style={buttonStyle}
                                    onClick={this.handleDelete}>
                                        X
                                </button>
                            </li>
                        </>
                    ))}
                </ol>
            </div>
        )
    }
}
export default BookList