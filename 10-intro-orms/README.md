# Intro to ORMs (Object Relational Mappers)

# CRUD REVIEW

Create
  Ruby: ClassName#new > ClassName#save
  SQL: 'INSERT INTO <table_name> (fields, ...) VALUES (values, ...);'
Read
  Ruby: ClassName.all
  SQL: 'SELECT * FROM <table_name>;'

  Ruby: ClassName.find_by_text(text)
  SQL: 'SELECT * FROM <table_name> WHERE <field> = <value>'
Update
  Ruby: ClassName#update(<field>: <value>)


Delete

<!-- A tweet belongs to a user and has some message content - must have user_id -->
<!-- The belongs_to must have a user_id on it -->
<!-- A user has a username, and has many tweets -->
<!-- A tweet can have many tags and a tag can have many tweets -->

* User (username)
  * User has many tweets
* Tweet (message, user)
  * Tweet belongs to a User
  * has many tweet tags
  * has many tags through tweet tags
* Tag (text)
  * has many tweet tags
  * has many tweets through tweet tags
* TweetTag (tag, tweet)
  * belongs to tag
  * belongs to tweet

Tag -< TweetTag >- Tweet >- User
