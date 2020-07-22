require_relative '../config/environment.rb'

# create your variables and/or write any tests here

landmark = Landmark.new('Monument', 'DC')

tourist1 = Tourist.new('Mansour')
tourist2 = Tourist.new('Maddie')

trip1 = Trip.new(tourist1, landmark)
trip2 = Trip.new(tourist2, landmark)

binding.pry
