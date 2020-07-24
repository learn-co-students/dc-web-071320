class CreateCchickens < ActiveRecord::Migration[5.2]
  def up
    create_table :checkouts do |t|
      t.integer :book_id
      t.integer :member_id
    end
  end

  def down
    drop_table :checkouts
  end
end
