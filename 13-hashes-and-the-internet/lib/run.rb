require_relative '../config/environment'

def start_app
  puts "The library is open!"
  puts "What is your name?"
  name = gets.chomp
  member = Member.find_or_create_by(name: name)

  puts "Hi #{member.name}"
  puts "What books would you like to find?"
  search = gets.chomp

  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search}")
  data = JSON.load(response)

  data["items"].each_with_index do |book, inde|
    puts "#{index + 1}. #{book["volumeInfo"]["title"]}"
    # Book.create(
    #   title: book["volumeInfo"]["title"],
    #   author_name: book["volumeInfo"]["authors"] ? book["volumeInfo"]["authors"][0] : nil,
    #   published_date: book["volumeInfo"]["publishedDate"],
    #   description: book["volumeInfo"]["description"]
    # )
  end

  book_no = gets.chomp

end

start_app
