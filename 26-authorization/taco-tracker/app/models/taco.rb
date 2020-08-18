class Taco < ApplicationRecord
    
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :price, presence: true, numericality: true
    validates :vegetarian, presence: true, inclusion: { in: ["true", "false"],
        message: " must be true or false" }

    has_many :taco_ingredients
    has_many :ingredients, through: :taco_ingredients

    belongs_to :restaurant, optional: true
    
    def display_name
        return self.name.titlecase
    end

    def slug_name
        return self.name.parameterize
    end

    def self.vegetarian
        return Taco.where(vegetarian: true)
    end

    def self.meat
        return Taco.where(vegetarian: false)
    end
end
