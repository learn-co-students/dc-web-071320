require 'pry'

x = "some string"

def greeting(msg)
    some_other_function(msg)
end

def some_other_function(some_arg)
    puts(some_arg)
end

greeting("Hello World")
binding.pry