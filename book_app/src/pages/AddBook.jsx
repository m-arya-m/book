import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import BookForm from '../components/Forms/BookForm'
import { authorizedRequest } from '../lib/api'

function AddBook() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishedDate, setPublishedDate] = useState('')
    const [numberOfPages, setNumberOfPages] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)
        console.log('Handle Submit is running')

        if (!title || !author ||!publishedDate ||!numberOfPages) {
            toast('Title and author and publishedDate and numberOfPages are required.')
            setLoading(false)
            return
        }
        try {
            const payload = { title, author, publishedDate, numberOfPages }
            const response = await authorizedRequest('post', `/books/`, payload) // Assuming the endpoint is /books/
            console.log(response)
            setTitle('')
            setAuthor('')
            setPublishedDate('')
            setNumberOfPages('')
            toast("your submission is done")
            navigate(`/`)
        } catch (err) {
            console.error("There was an error adding the book!", err)
            toast("Failed to add book. Please try again.")
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="main-content">
            <BookForm
                title={title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                publishedDate={publishedDate}
                setPublishedDate={setPublishedDate}
                numberOfPages={numberOfPages}
                setNumberOfPages={setNumberOfPages}
                disabled={loading}
                handleSubmit={handleSubmit}
                titleVerb='Add'
            />
            {loading && <p>Loading...</p>}
            <ToastContainer />
        </div>
    )
}

export default AddBook;