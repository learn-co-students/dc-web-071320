require_relative "./school.rb"
require_relative "./student.rb"
require "pry"

bayside = School.new("Bayside")
spellman_academy = School.new("Spellman")

ac = Student.new("AC Slater", bayside)
lisa = Student.new("Lisa Turtle", bayside)
jessie = Student.new("Jessie Spano", bayside)

sabrina = Student.new("Sabrina", spellman_academy)

puts "Student knows their name"
puts ac.name == "AC Slater"

puts "Student.all returns all students"
puts Student.all.include?(ac)
puts Student.all.include?(lisa)

puts "Student.find_by_name returns student with matching name"
puts Student.find_by_name("Jessie Spano") == jessie

puts "Student knows their school"
puts ac.school == bayside 

puts "Student knows its school name"
puts ac.school_name == "Bayside"

puts "School knows its students"
puts bayside.students == [ac, lisa, jessie]
puts !bayside.students.include?(sabrina)

puts "School can enroll a student"
screech = Student.new("Screech Powers")
bayside.add_student(screech)
puts screech.school == bayside 
puts bayside.students.include?(screech)

# flatiron = School.new("Flatiron")
# flatiron.add_instructor("Paul Nichols")
# flatiron.add_instructor("Maddie Ward")
# flatiron.add_instructor("Mansour Cheyo")

# puts "\nFlatiron instructors: "
# print flatiron.instructors

# bayside.add_instructor("Mr Belding")
# bayside.add_instructor("Miss Bliss")

# puts "\nBayside instructors: "
# print bayside.instructors

# iterate over all flatiron instructors
# find the string that matches the old name
# remove old name
# add the updated name