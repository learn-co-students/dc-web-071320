class Book < ActiveRecord::Base
  has_many :checkouts
  has_many :members, through: :checkouts
end
