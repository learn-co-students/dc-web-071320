require 'pry'
# Build out these classes and methods so that a restaurant can track the meals it serves, 
# and a Meal knows all the restaurants where it is served.  e.g., if McDonalds and Burger King
# both serve hamburgers and chicken sandwiches, `mcdonalds.meals` would include both hamburgers
# and chicken sandwiches, and `hamburger.restaurants` would include both McDonalds and Burger King

class Restaurant

    attr_reader :name, :meals

    def initialize(name)
        @name = name
    end

    def add_meal(meal)
        MealRestaurant.new(meal, self)
    end

    def meals
        # look at all meal_restaurants
        # find the ones where the current restaurant (self) is in the restaurant column
        # collect the meals from each matching record

        matching_joins = MealRestaurant.all.select do |mr|
            mr.restaurant == self
        end
        matching_joins.map do |match|
            match.meal 
        end
    end
end

class Meal

    attr_reader :name, :restaurants 

    def initialize(name)
        @name = name
    end

    def add_restaurant(restaurant)
        # salad.add_restaurant(mcdonalds)
        MealRestaurant.new(self, restaurant)
    end

    def restaurants
        # look through all Meal Restaurants
        # find the ones matching the restaruant who called this method (self)
        # collect the meals from each matching row
        matches = MealRestaurant.all.select do |mr|
            mr.meal == self 
        end
        matches.collect do |match| 
            match.restaurant
        end
    end

end

class MealRestaurant

    attr_reader :meal, :restaurant 

    @@all = []

    def initialize(meal, restaurant)
        @meal = meal
        @restaurant = restaurant
        @@all << self
    end

    def self.all # class method: MealRestaurant.all  
        @@all
    end

end

mcdonalds = Restaurant.new("McDonalds")
bk = Restaurant.new("Burger King")
dennys = Restaurant.new("Denny's")
# puts mcdonalds.name


burgers = Meal.new("Hamburgers")
salad = Meal.new("Salad")
fries = Meal.new("Fries")
mcdonalds.add_meal(burgers)
dennys.add_meal(burgers)
bk.add_meal(burgers)

fries.add_restaurant(bk)
fries.add_restaurant(mcdonalds)

# print mcdonalds.meals
print fries.restaurants