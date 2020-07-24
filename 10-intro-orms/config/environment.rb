require 'bundler'
Bundler.require

DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/tweet.rb'
require_relative '../lib/tag.rb'
require_relative '../lib/tweet_tag.rb'
require_relative '../lib/user.rb'
require_relative '../lib/tweets_app.rb'
