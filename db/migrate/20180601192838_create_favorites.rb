class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :person_id
      t.integer :position

      t.timestamps
    end
  end
end
