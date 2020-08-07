class TacosController < ApplicationController

    before_action :find_taco, only: [:show, :edit, :update]
    before_action :run_before_action

    def index
        if params[:vegetarian] == "true"
            @tacos = Taco.vegetarian
        elsif params[:vegetarian] == "false" 
            @tacos = Taco.meat
        else
            @tacos = Taco.all
        end
        render :index
    end

    def show
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
        @taco = Taco.create(taco_params)
        redirect_to taco_path(taco)   # www.myapp.com/tacos/27
    end

    def edit
    end

    def update
        @taco.update(taco_params)
        redirect_to taco_path(@taco)
    end

    def destroy
        id = params[:id]
        Taco.destroy(id)
        redirect_to tacos_path
    end

    private

    def run_before_action
        puts "\n\n\nBefore Action Running\n\n"
    end

    def run_after_action
        puts "\n\n\nAfter Action Running\n\n"
    end

    # def redirect_to_index_page
    #     redirect_to tacos_path
    #     return
    # end

    def find_taco
        @taco = Taco.find(params[:id])
    end

    def taco_params
        params.require(:taco).permit(:name, :price, :vegetarian)
    end
end

# <a href="www.google.com">Google</a>

# <%= link_to "Google", "www.google.com" %>
