class TacosController < ApplicationController

    before_action :find_taco, only: [:show, :edit, :update]
    before_action :run_before_action

    def index
        if params[:vegetarian] == "true"
            @title_text = "Vegetarian Tacos"
            @tacos = Taco.vegetarian
        elsif params[:vegetarian] == "false" 
            @title_text = "Meat Tacos"
            @tacos = Taco.meat
        else
            @title_text = "All Tacos"
            @tacos = Taco.all
        end
        render :index
    end

    def show
        cookies["favorite_taco"] = "Bacon Taco"
        cookies["last_visited"] = @taco.name
        session["secret_favorite"] = "Chicken Taco"
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
        @taco = Taco.new(taco_params)
        if @taco.valid?
            @taco.save
            redirect_to taco_path(@taco)   # www.myapp.com/tacos/27
        else
            render :new
        end
    end

    def edit
        # @restaurants = Restaurant.all
    end

    def update
        @taco.update(taco_params)
        redirect_to taco_path(@taco)
    end

    def destroy # DELETE to /tacos/27
        id = params[:id]
        Taco.destroy(id)
        redirect_to tacos_path
    end

    def delete_taco
        # loads delete taco form
        render :delete_taco_form
    end

    def murder_taco
        id = params[:taco_id]
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
        params.require(:taco).permit(:name, :price, :vegetarian, :restaurant_id, :ingredient_ids => [])
    end
end

# <a href="www.google.com">Google</a>

# <%= link_to "Google", "www.google.com" %>
