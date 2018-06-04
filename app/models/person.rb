class Person < ApplicationRecord
    has_many :favorite, dependent: :destroy
    has_many :users, through: :favorite

end
