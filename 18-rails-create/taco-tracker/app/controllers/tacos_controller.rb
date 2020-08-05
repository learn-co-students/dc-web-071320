class TacosController < ApplicationController

    def index
        if params[:vegetarian] == "true"
            @tacos = Taco.vegetarian
        elsif params[:vegetarian] == "false" 
            @tacos = Taco.meat
        else
            @tacos = Taco.all
        end
        # render :index
    end

    def show

        id = params[:id]
        @taco = Taco.find(id)
        render(:show)
    end

    def new
        # load a blank form
        @taco = Taco.new # empty skeleton
        render :new
    end

    def create
        name = params["taco"]["name"]
        price = params["taco"]["price"]
        veg = params["taco"]["vegetarian"]
        taco = Taco.create(name: name, price: price, vegetarian: veg)
        # "/tacos/new_taco_id"
        # render :show
        redirect_to taco_path(taco)
    end
end
