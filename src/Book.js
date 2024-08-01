const Book = ({ title, author, imgURL, link, index}) => {
    return (
        <article className="book">
            <img className="card-img-top" src={imgURL} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{author}</p>
            </div>
            <div className="book-rank">{index}</div>
        </article>
    )
}

export default Book