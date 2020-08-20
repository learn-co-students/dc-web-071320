class FavoritesController < ApplicationController

  before_action :authorized, except: [:index]

  def new
    render :favorite_picker
  end

  def create
    current_user.taco_ids = params[:user][:taco_ids]
    current_user.save
    redirect_to tacos_path
  end

  def index
    if logged_in?
      @tacos = current_user.tacos
    else
      @tacos = []
    end
  end
end
