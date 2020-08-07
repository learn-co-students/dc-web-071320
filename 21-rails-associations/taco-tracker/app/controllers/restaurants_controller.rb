class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all 
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def new
    @restaurant = Restaurant.new
  end 

  def create
    r = Restaurant.create(restaurant_params)
    redirect_to restaurant_path(r)
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :taco_ids => [])
  end
end
