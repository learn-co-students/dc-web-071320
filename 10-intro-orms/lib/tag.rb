class Tag < ActiveRecord::Base

end
  # t1 = Tag.create(text: 'hello')
  # t1.update(text: 'HALLO')

  # table name: tags

  # attr_accessor :text
  #
  # @@all = []
  #
  # def self.all
  #   @@all
  # end

  # Tag.new(text: 'hello')
  # def initialize(attrs={})
  #   # attrs = {text: 'hello'}
  #   @text = attrs[:text]
  #   # @text = 'hello'
  #
  #   @@all << self
  # end

  # def save
  #   sql = "INSERT INTO tags (text) VALUES (?)"
  #   DB[:conn].execute(sql, text)
  #   @id = DB[:conn].execute('SELECT last_insert_rowid()')[0]["last_insert_rowid()"]
  # end

  # def self.all
  #   DB[:conn].execute("SELECT * FROM tags")
  # end
  #
  # def self.find_by_text(text)
  #   # self.all.select do |tag|
  #   #   tag.text === text
  #   # end
  #
  #   sql = "SELECT * FROM tags WHERE text = '#{text}'"
  #   DB[:conn].execute(sql)
  # end
  #
  # # ClassName#update(<field>: <value>)
  # def update(attrs={})
  #   sql = "UPDATE tags SET text = '#{attrs[:text]}' WHERE id = '#{@id}'"
  #   binding.pry
  #   DB[:conn].execute(sql)
  # end
# end
