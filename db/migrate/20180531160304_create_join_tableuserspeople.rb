class CreateJoinTableuserspeople < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :people do |t|
      # t.index [:user_id, :person_id]
      # t.index [:person_id, :user_id]
    end
  end
end
