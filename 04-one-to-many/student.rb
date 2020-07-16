class Student

    attr_accessor :school

    # def school
    #     @school 
    # end

    @@all = []

    def initialize(name, school=nil)
        @name = name
        @@all << self
        @school = school
    end

    def name
        return @name
    end

    def self.all
        # Student.all
        return @@all 
    end

    def self.find_by_name(name)
        # look through all the students
        # if student's name matches argument
            # return that student
        found_student = self.all.find do |student|
            # in class method so self is the class
            student.name == name
        end
        return found_student
    end

    def school_name
        return self.school.name
    end
end