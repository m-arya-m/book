import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { authorizedRequest } from '../lib/api'
import BookForm from '../components/Forms/BookForm'

function EditBook() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishedDate, setPublishedDate] = useState('')
    const [numberOfPages, setNumberOfPages] = useState('')
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    async function getCurrentBookData() {
        try {
            const response = await authorizedRequest('get', `/books/${id}/`)
            setTitle(response.data.title)
            setAuthor(response.data.author)
            setPublishedDate(response.data.publishedDate)
            setNumberOfPages(response.data.numberOfPages)
        } catch (error) {
            console.error(error)
            setErrorMsg('Failed to fetch book data.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCurrentBookData()
    }, [id])

    async function handleSubmit(event) {
        event.preventDefault()
        if (!title || !author || !publishedDate || !numberOfPages) {
            setErrorMsg('All fields are required.')
            return
        }

        try {
            await authorizedRequest('patch', `/books/${id}/`, { title, author, publishedDate, numberOfPages })
            navigate(`/books/${id}`)
        } catch (error) {
            console.error(error)
            setErrorMsg('Failed to update book.')
        }
    }

    if (loading) return <h1>Loading...</h1>
    if (errorMsg) return <h1>{errorMsg}</h1>

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
                handleSubmit={handleSubmit}
                disabled={loading}
                titleVerb='Edit'
            />
        </div>
    )
}

export default EditBook
