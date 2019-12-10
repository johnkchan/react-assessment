import React, { Component } from 'react'

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

   
    render() {
      
        return (
            <div className="bookListMain">
                <div className="header">
                <form>
                    <input placeholder="Book" />
                    <button>
                        Add Book
                    </button>
                    <button> Get Top 10 Books by Ken Follet</button>
                </form>
                </div>
            </div>
        )
    }
}
export default BookList