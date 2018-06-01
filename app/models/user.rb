class User < ApplicationRecord
    has_many :favorite, dependent: :destroy
    has_many :Person, through: :favorite
    # has_many :Planet, dependent: :destroy
    # has_many :Starship, dependent: :destroy
    # has_many :Vehicle, dependent: :destroy
end
