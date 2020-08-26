# Client-Server Communication

## LGs:
- [ ] Use fetch to retrieve data from a server and display the results in the DOM
    - Distinguish between synchronous and asynchronous code
- [ ] Recognize code that uses Promises
    - Use the .then method to add handlers for promise resolution


### Delivarables 
1. Display all books information on the page.
2. Write fetch to display data form JSON server.

### JSON Server:
* Get a full fake REST API with zero coding.
* Created for front-end developers who need a quick back-end for prototyping and mocking.
* https://www.npmjs.com/package/json-server

### Asynchronous JavaScript
* JavaScript is a single-threaded programming language which means only one thing can happen at a time. That's where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.
* **What is AJAX?**
    * AJAX = Asynchronous JavaScript And XML.
    * AJAX is not a programming language.
    * AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

### Fetch Request:
* Calling fetch() returns a promise. We can then wait for the promise to resolve by passing a handler with the then() method of the promise.
* That handler receives the return value of the fetch promise, a Response object.
* Promise:
`
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
`

### External resources:
* [Understanding Asynchronous JavaScript](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff#:~:text=JavaScript%20is%20a%20single%2Dthreaded,can%20happen%20at%20a%20time.&text=That's%20where%20asynchronous%20JavaScript%20comes,without%20blocking%20the%20main%20thread.)
* [AJAX Intro](https://www.w3schools.com/xml/ajax_intro.asp)