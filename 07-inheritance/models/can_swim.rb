module CanSwim

    module ClassMethods
        def can_swim?
            return true
        end
    end

    module InstanceMethods
        def take_a_swim
            "Blub blub going for a dip"
        end

        def dry_off
            "That was a fun swim"
        end
    end

end

# can't type CanSwim.new

# Cat.can_swim?
# petey.can_swim?