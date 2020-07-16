class School

    attr_accessor :name

    # attr_reader :name
    # attr_writer :name


    def initialize(name)
        @name = name
    end

    def students
        # loop through all students
        # choose the students who match the school
        # we are looking for
        Student.all.select do |student|
            student.school == self
        end

    end

    def roster
        self.students.map do |student|
            student.name
        end
    end
    
    def add_student(student)
        binding.pry
        student.school = self
    end
end

