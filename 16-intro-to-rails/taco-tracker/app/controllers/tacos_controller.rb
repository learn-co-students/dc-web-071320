class TacosController < ApplicationController


    def home
        render(:homepage)
    end

    def about 
        @taco_facts = ["They're yummy", "They're cheap", "They're easy to cook"]
        render :about
    end

end
