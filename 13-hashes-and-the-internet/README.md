# Hashes and the Internet

## Domain: Library

Member -< Checkout >- Book

Member (name)
  * has many checkouts
  * has many books through checkouts
Book (title, author_name, published_date, description)
  * has many checkouts
  * has many members through checkouts
Checkout (member, book)
  * belongs to a member
  * belongs to a book

### Define

* GET requests (for data)
* Server responses (of data)
* Developer console (Mod 3)
* APIs (Application Programming Interfaces)
* JSON (string formatted as a hash/object) (JavaScript Object Notation)

### Deliverables

* Define a seed.rb file
* Write an application that takes a search term from a user
* Make a Request to the GoogleBooks API and get back some results
  * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
* Display the titles, author names, and description for each book
