class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title # t.text
      t.string :author_name
      t.text :description
      t.date :published_date
    end
  end

  # def up
  #
    # create_table :books do |t|
    #   t.string :title # t.text
    #   t.string :author_name
    #   t.text :description
    #   t.date :published_date
    # end
  #
  # end

  # def down
  #   drop_table :books
  # end
end
