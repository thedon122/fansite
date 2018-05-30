class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :rotation_period
      t.string :orbital_period
      t.string :climate

      t.timestamps
    end
  end
end
