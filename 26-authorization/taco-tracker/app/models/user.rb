class User < ApplicationRecord
    has_secure_password
    validates :password, length: {minimum: 6}
    validates :username, uniqueness: {case_sensitive: false}
end
