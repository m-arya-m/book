import React from 'react'

function BookForm(props) {
    return (
        <div className='form-container'>
            <h3>{props.titleVerb} your Book</h3>
            <form onSubmit={props.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title:   </label>
                    <input
                        id='title'
                        name='title'
                        required
                        value={props.title}
                        onChange={event => props.setTitle(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='author'>Author:  </label>
                    <input
                        id='author'
                        name='author'
                        required
                        value={props.author}
                        onChange={event => props.setAuthor(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='publishedDate'>Published Date:  </label>
                    <input
                        id='publishedDate'
                        name='publishedDate'
                        type='date'
                        required
                        value={props.publishedDate}
                        onChange={event => props.setPublishedDate(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='numberOfPages'> Number Of Pages:  </label>
                    <input
                        id='numberOfPages'
                        name='numberOfPages'
                        required
                        value={props.numberOfPages}
                        onChange={event => props.setNumberOfPages(event.target.value)}
                    />
                </div>
                <button type="submit" disabled={props.disabled}>{props.disabled? "Submitting....":"Submit"}</button>
            </form>
        </div>
    )
}
export default BookForm