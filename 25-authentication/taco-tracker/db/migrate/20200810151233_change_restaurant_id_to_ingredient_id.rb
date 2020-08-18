class ChangeRestaurantIdToIngredientId < ActiveRecord::Migration[6.0]
  def change
    rename_column :taco_ingredients, :restaurant_id,  :ingredient_id
  end
end
