class Api::V1::InstructorsController < ApplicationController

    before_action :find_instructor, only:[:show, :update, :destroy]

    def index
        instructors = Instructor.all
        render json: instructors
        # render json: instructors, only: [:id, :name], include: :students 
    end

    def show
    # byebug
        # instructor = Instructor.find(params[:id])
        render json: @instructor
    end

    def create
        # byebug
        instructor = Instructor.create(instructor_params)
        render json: instructor
    end

    def update
        # byebug
        # instructor = Instructor.find(params[:id])
        @instructor.update(instructor_params)
        render json: @instructor
    end

    def destroy
        @instructor.destroy
        # render json: {}
        render json: "Instructor deleted!!!!"
    end

    private

    def find_instructor
        @instructor = Instructor.find(params[:id])
    end

    def instructor_params
        params.require(:instructor).permit(:name)
    end
end
