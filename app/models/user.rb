class User < ApplicationRecord
    has_many :person, dependent: :destroy
    has_many :planet, dependent: :destroy
    has_many :starship, dependent: :destroy
    has_many :vehicle, dependent: :destroy
end
