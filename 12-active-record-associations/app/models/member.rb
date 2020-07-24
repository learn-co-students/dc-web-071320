class Member < ActiveRecord::Base
   has_many :checkouts # Checkout (member_id)
   has_many :books, through: :checkouts


  # ActiveRecord::Base, our base model, the super model
  # what is the class name of this class? Member
  # what is the plural lowercased version? members


  # attr_reader :name
  #
  # @@all = []
  #
  # def initialize(name)
  #   @name = name
  #   @@all << self
  # end
  #
  # def self.all
  #   @@all
  # end

  # def self.create(attr)
  #   self.new(attr).save
  # end
end
