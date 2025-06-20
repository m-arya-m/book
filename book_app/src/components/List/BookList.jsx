import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { authorizedRequest } from "../../lib/api"


const BookList = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    

    async function getAllBooks() {
        setLoading(true)

    try {
              const response = await authorizedRequest('get',`/books/`)
              console.log(response)
              setBooks(response.data)
          } catch (error) {
              console.error(error)
              setErrorMsg('Failed to fetch books.')
          } finally {
              setLoading(false)
          }
      }
    
    useEffect(() => {
        getAllBooks()
    }, [])


    return (
        <div>
            <h2>All Books:</h2>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id}>
                            <Link to={`/books/${book.id}/`}>{book.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList;
