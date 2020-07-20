
class Cat < Animal
    
    extend CanSwim::ClassMethods # extend class methods
    include CanSwim::InstanceMethods # include instance methods

    attr_accessor :color 

    def initialize(name, color)
        @color = color 
        super(name)
    end

    def take_a_swim
        puts "Kitty is taking a swim"
        super()
    end

    def speak
        "I am a pretty kitty"
    end

    def walk
        super 
        puts "I need to get outdoors"
        super() # parenthesis optional but a good idea
        # return "finished"
    end
    
    def eat_snack(yummy_snack, yumminess)
        puts "I rate this snack a #{yumminess}"
        super(yummy_snack)
    end

end


