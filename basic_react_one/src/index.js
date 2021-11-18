import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//Array of Data
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41hS71+HNmL._SY344_BO1,204,203,200_.jpg',
    title: 'Bible Teacher',
    author: 'David Pawson',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/81obaCHjmfL._AC_UL320_.jpg',
    title: 'Evangelist',
    author: 'Billy Graham',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41LxaFTbdWS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Teaching',
    author: 'David Pawson',
  },
]

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />
        //<Book key={index} book={book} />
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
