import React from 'react'
import BookList from '../components/List/bookList'
import { Link } from 'react-router-dom'
function Home() {

    return (
        <div className="main-content">        
            <h1> Books </h1>
            <BookList />
            <Link to={`/books/new`} className='button'>Add Book</Link>
        </div>
    )
}
export default Home