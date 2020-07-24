class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    # we want to describe how to set up our table
    # SQL = 'CREATE TABLE members (id INTEGER PRIMARY KEY, name TEXT)'

    # create_table :members do |table_builder|
    create_table :members do |t|
      t.string :name
    end
  end
end
