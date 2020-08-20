class User < ApplicationRecord
    has_secure_password
    validates :password, length: {minimum: 6}
    validates :username, uniqueness: {case_sensitive: false}

    has_many :favorites
    has_many :tacos, through: :favorites
end
