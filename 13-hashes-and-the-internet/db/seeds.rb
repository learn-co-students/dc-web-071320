require 'pry'
require 'rest-client'

# Define the data that we want our app to start with

Checkout.destroy_all
Member.destroy_all
Book.destroy_all

m1 = Member.create(name: "Alex")
# m1 = Member.find_or_create_by(name: "Alex")
m2 = Member.create(name: "Abdullah")
m3 = Member.create(name: "Penn")
m4 = Member.create(name: "Christina")

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
data = JSON.load(response)

data["items"].each do |book|
  Book.create(
    title: book["volumeInfo"]["title"],
    author_name: book["volumeInfo"]["authors"] ? book["volumeInfo"]["authors"][0] : nil,
    published_date: book["volumeInfo"]["publishedDate"],
    description: book["volumeInfo"]["description"]
  )
end

# binding.pry

b1 = Book.create(title: "The Hunger Games", author_name: "Suzanne Collins", published_date: "2000")
b2 = Book.create(title: "The Bell Jar", author_name: "Sylvia Plath", published_date: "1960")
b3 = Book.create(title: "Lord of the Rings", author_name: "JRR Tolkein", published_date: "1940")


# c1 = Checkout.create(member: m1, book: m3)

m1.books << [b1, b2]
# m1.books << b1
# m1.books << b2

m2.books << b3
m3.books << b3
# b3.members << [m2, m3]

m4.books << b2
