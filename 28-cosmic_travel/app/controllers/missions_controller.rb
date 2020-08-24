class MissionsController < ApplicationController
  def new
    @mission = Mission.new
  end

  def create
    mission = Mission.create(mission_params)
    redirect_to scientist_path(mission.scientist.id)
  end

  private

  def mission_params
    params.require(:mission).permit(:name, :scientist_id, :planet_id)
  end

end
