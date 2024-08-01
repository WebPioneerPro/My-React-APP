import React from "react"
import ReactDOM from 'react-dom/client'

import './index.css';
import { books } from "./books";
import Book from "./Book";

function Booklist() {
    return (
        <>
            <h1 className="bookList-title">Bestsellers in Indian Writing</h1>
            <section className="bookList">
                {
                    books.map((book, index) => {
                        return <Book {...book} key={book.id} index={index + 1} />
                    })
                }
            </section>
        </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
    <Booklist />
</React.StrictMode>
)