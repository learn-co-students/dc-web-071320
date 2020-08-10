class Taco < ApplicationRecord

    belongs_to :restaurant
    
    def display_name
        return self.name.titlecase
    end

    def self.vegetarian
        return Taco.where(vegetarian: true)
    end

    def self.meat
        return Taco.where(vegetarian: false)
    end
end
