require_relative "./cat.rb"
require "pry"

petey = Cat.new("Petey", "black and white", 8)
ella = Cat.new("Ella", "black", 10)
lexi = Cat.new("Lexi", "orange", 5, 3)
garfield = Cat.new("Garfield", "orange", 3)
heathcliff = Cat.new("Heathcliff", "orange", 2)
# petey.name=("Petey")

# puts petey.name

# petey.color = "black and white"
# puts petey.color

# petey.fluffiness = 8
# puts petey.fluffiness
# puts ella.methods

# ella.number_of_legs = 5 # won't work, no method

# puts ella.number_of_legs
# puts lexi.number_of_legs
# puts lexi.grow_a_leg
# puts lexi.number_of_legs

# puts petey.say_species

# puts Cat.is_warm_blooded?

petey =  Cat.find_by_name("Petey")
puts petey
# [<Cat name=Petey>, <Cat name="Ella"]

