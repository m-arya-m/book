import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { authorizedRequest } from '../lib/api'

function BookDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [loading, setLoading] = useState(true)

    async function getSingleBook() {
        try {
            const response = await authorizedRequest('get', `/books/${id}/`)
            setBook(response.data)
        } catch (err) {
            console.log(err)
            if (err.response?.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Failed to load book details 😔')
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getSingleBook()
    }, [id])

    async function deleteBook() {
        try {
            await authorizedRequest('delete', `/books/${id}/`)
            navigate('/books')
        } catch (err) {
            console.log(err)
            setErrorMsg('Failed to delete book')
        }
    }

    if (loading) return (
        <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading book details...</p>
        </div>
    )

    if (errorMsg) return <div className="error-message">{errorMsg}</div>
    if (!book) return <div className="not-found">Book not found</div>

    return (
        <div className="book-detail">
            <div className="book-header">
                <h2>{book.title}</h2>
                <p>By {book.author}</p>
                <p>Published: {new Date(book.publishedDate).toLocaleDateString()}</p>
                <p>{book.numberOfPages} pages</p>
 
                
            </div>

            <div className="book-actions">
                {
                    deleteConfirm ? (
                        <div className="confirmation-dialog">
                            <p>Are you sure you want to delete this book?</p>
                            <button className="btn-confirm" onClick={deleteBook}>
                                Yes, Delete
                            </button>
                            <button className="btn-cancel" onClick={() => setDeleteConfirm(false)}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <>
                            <button className="btn-delete" onClick={() => setDeleteConfirm(true)}>
                                Delete Book
                            </button>
                            <Link to={`/books/${id}/edit`} className="btn-edit">
                                Edit Book
                            </Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default BookDetail
