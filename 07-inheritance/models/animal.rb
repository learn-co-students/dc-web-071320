class Animal

    attr_accessor :name 

    def initialize(name)
        @name = name
    end

    # def name
    #     @name
    # end

    def walk 
        puts "I am going for a walk"
    end

    def speak
        puts("Hello I am an animal of some sort")
    end

    def eat_snack(snack_name)
        puts "I love eating #{snack_name}"
    end
end


# def puts(str) 
#     SYSTEM.stdout(str)
#     return nil
# end