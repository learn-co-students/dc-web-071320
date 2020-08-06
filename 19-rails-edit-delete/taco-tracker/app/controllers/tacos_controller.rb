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
        # name = params["taco"]["name"]
        # price = params["taco"]["price"]
        # veg = params["taco"]["vegetarian"]
        taco = Taco.create(taco_params)
        redirect_to taco_path(taco)
    end

    def edit
        @taco = Taco.find(params[:id])
        
    end

    def update
        @taco = Taco.find(params[:id])
        @taco.update(taco_params)
        redirect_to taco_path(@taco)
    end

    private

    def taco_params
        params.require(:taco).permit(:name, :price, :vegetarian)
    end
end





# class Cat 

#     def buy_food
#         @food = Food.new
#     end

# end