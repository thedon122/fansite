class Person < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :users, through: :favorite

end
