class CreateVehicles < ActiveRecord::Migration[5.2]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.string :model
      t.string :manufactururer
      t.string :cost_in_credits

      t.timestamps
    end
  end
end
