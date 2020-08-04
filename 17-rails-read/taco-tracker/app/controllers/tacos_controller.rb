class TacosController < ApplicationController


    def home
        render(:homepage)
    end

    def about 
        @taco_facts = ["They're yummy", "They're cheap", "They're easy to cook"]
        render :about
    end

    def cats
        @cat_facts = ["They're fluffy", "They're snuggly", "They're adorable"]
        render :cats
    end

    def index 
        @tacos = Taco.all
        # render :index
    end

    def show
        id = params[:id]
        @taco = Taco.find(id)
        render(:show)
    end
end
