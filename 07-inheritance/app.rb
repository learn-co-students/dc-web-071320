require "pry"
require_relative "./models/can_swim.rb"
require_relative "./models/animal.rb"
require_relative "./models/cat.rb"
require_relative "./models/dog.rb"

petey = Cat.new("Petey", "black & white")

walk_return = petey.walk 

binding.pry