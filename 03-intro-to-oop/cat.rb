class Cat 

    attr_writer :name, :fluffiness # def name=(new_name)
    attr_reader :name, :number_of_legs # def name 
    attr_accessor :color # reader and writer

    @@species = "feline"
    @@all_cats = []
    # @@all_names = []

    def initialize(name, color, fluffiness, number_of_legs=4)
        # gets called by .new
        @name = name
        @color = color 
        @fluffiness = fluffiness
        @number_of_legs = number_of_legs
        @@all_cats << self
        # @@all_names << self.name
        # puts "I have created a new cat like a god"
    end

    def self.all 
        return @@all_cats
    end

    def self.all_names 
        self.all.map {|cat| cat.name } # in class method, "self" is the class
    end

    def meow 
        "Meow Meow I am a kitty named #{self.name}"
    end
    
    # def fluffiness=(fluffiness) # setter
    #     @fluffiness = fluffiness
    # end

    def fluffiness # getter
        if @fluffiness > 5
            return "Very fluffy"
        else 
            return "Not so fluffy, but still better than a dog"
        end
    end

    def grow_a_leg
        @number_of_legs += 1
    end

    def introduce
        # "I am a kitty named Petey.  I am black and white.  I am a Very fluffy kitty"
        "I am a kitty named #{self.name}.  I am #{self.color}.  I am a #{self.fluffiness} kitty"
    end

    def self.say_species # class method
        @@species 
    end

    # def say_species 
    #     @@species
    # end

    def self.is_warm_blooded?
        return true
    end

    # write a method that takes in the name of a cat and returns 
    # the first cat with that name


    # write a method that takes in a color of a cat and returns an array
    # of all cats that are that color

    # def name=(new_name)
    #     @name = new_name
    # end

    # def name
    #     return @name
    # end
    #             # V argument
    # def color=(color)
    #     #^ method name

    #     # V instance variable
    #     @color = color
    #                #^ argument
    # end 

    # def color 
    #     @color
    # end

end