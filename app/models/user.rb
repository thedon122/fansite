class User < ApplicationRecord
    has_and_belongs_to_many :Person, dependent: :destroy
    # has_many :Planet, dependent: :destroy
    # has_many :Starship, dependent: :destroy
    # has_many :Vehicle, dependent: :destroy
end
