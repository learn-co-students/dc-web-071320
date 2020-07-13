instructors = [
  {name: "Paul", role: "lead"},
  {name: "Maddie", role: "coach"},
  {name: "Mansour", role: "coach"}
]

# names = instructors.each do |instructor| 
#   puts instructor[:name]
# end

# puts "\n\n\n"

# puts names

# names = instructors.collect do |instructor|
#   instructor[:name].upcase
# end

# print names

# each_names = []
# instructors.each do |instructor|
#   each_names << instructor[:name]
# end

# print each_names

found_instructor = nil

instructors.each do |instructor|
  if instructor[:name] == "Maddie"
    found_instructor = instructor
  end
end

# print found_instructor

found_instructor = instructors.find do |instructor|
  instructor[:name] == "Maddie"
end

# print found_instructor
# [{name: "Maddie", role: "coach"}, {name: "Mansour?", role: "coach"}]
coaches = instructors.select do |instructor|
  instructor[:role] == "coach"
end

coach_names = coaches.map do |coach|
  coach[:name]
end












