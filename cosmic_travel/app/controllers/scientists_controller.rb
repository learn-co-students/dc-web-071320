class ScientistsController < ApplicationController
  def index
    @scientists = Scientist.all 
  end

  def show
    @scientist = Scientist.find(params[:id])
  end

  def new
    @scientist = Scientist.new
  end

  def create
    @scientist = Scientist.new(sci_params)
    if @scientist.valid?
      @scientist.save
      redirect_to scientist_path(@scientist)
    else
      render :new
    end
  end

  def edit
    @scientist = Scientist.find(params[:id])
  end

  def update
    @scientist = Scientist.find(params[:id])
    @scientist.update(sci_params)
    if @scientist.valid?
      # @scientist.save
      redirect_to scientist_path(@scientist)
    else
      render :edit 
    end
  end

  def destroy
    id = params[:id]
    Scientist.destroy(id)
    redirect_to scientists_path
  end

  def about
    @num_of_scientists = Scientist.count
    @num_of_planets = Planet.count
  end

  private

  def sci_params
    params.require(:scientist).permit(:name, :field_of_study, :planet_ids => [])
  end
end
