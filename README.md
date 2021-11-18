**Mastering React**

```
stateless functional component
Always returns JSX.


Example
function Greeting() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

```

**JSX Rules**

```
(a)Anything that i want to render into my JSX from Javscript must be in curly braces{}


```

**Props**

```
This is data that i am passing into my component.

N/B

I have learned about child props.

<Book>....data inside is a child prop </Book>

```

```
//JSX Rules
//return single element
// div //section /article/fragment
//Attriutes and events must be in Camel Case
//so as to return Many divs i can return them in a fragment
//use camel case for HTML attribute
//close every element
// i may omit paranthesis but i must make sure that my opening tag is
//in the same line as the closing tag

function Greeting() {
  return (
    <div className=''>
      <h3>Hello People!</h3>
      <ul>
        <li>
          <a href='#'>Hello World!</a>
        </li>
        <img src='' alt='' />
        <input type='text' name='' id='' />
      </ul>
    </div>
  )
}

```

**What JSX Does under the Hood**

```

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world!')
//   )
// }
```

**Iteration**

```
(a)Fetch data from List

(b)Loop through

(c)Pass data into my Components

```

**Events**

```
I can call my events either as a refeence or as an Inline
function

Attribute and the Handler/Function Makes up Events

```

**Imports and Exports**

```
There are of two types:

(a)Default Exports.

can take a different name when exporting.

export default Book

import Book from './Book'

(b)Named Exports

Must be imported as they are inside curtly braces

export const books = [];

Import { books } from './books'

Rule

```

**Advanced React**

```
Hooks are functions that react provides to complete various tasks.


```

**Notes By**

```
Mbugua Caleb

```
