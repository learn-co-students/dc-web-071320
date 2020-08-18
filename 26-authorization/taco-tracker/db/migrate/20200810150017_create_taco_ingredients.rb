class CreateTacoIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :taco_ingredients do |t|
      t.integer :taco_id
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
