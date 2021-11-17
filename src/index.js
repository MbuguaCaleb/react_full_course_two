import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//modeling my Data
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41hS71+HNmL._SY344_BO1,204,203,200_.jpg',
  title: 'Bible Teacher',
  author: 'David Pawson',
}
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81obaCHjmfL._AC_UL320_.jpg',
  title: 'Evangelist',
  author: 'Billy Graham',
}

function BookList() {
  return (
    <section className='bookList'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          impedit deleniti cumque dolores quam reiciendis perferendis! Veritatis
          earum enim dolores?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  //const { img, title, author } = props
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
