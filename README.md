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



**Notes By**

```
Mbugua Caleb

```
