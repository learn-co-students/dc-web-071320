class CreateJoinTableTacosUser < ActiveRecord::Migration[6.0]
  def change
    create_join_table :tacos, :users, table_name: :favorites do |t|
      # t.index [:taco_id, :user_id]
      # t.index [:user_id, :taco_id]
    end
  end
end
