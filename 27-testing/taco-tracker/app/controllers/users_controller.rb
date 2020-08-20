class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to tacos_path
    else
      render :new
    end
  end

  def change_password
    render :change_password
  end

  def update_password
    old_password = params[:current_password]
    new_password = params[:new_password]
    user_id = session[:user_id]
    user = User.find(user_id)
    if user.authenticate(old_password)
      user.password = new_password
      user.save
      redirect_to tacos_path
    else
      flash.now[:password_error] = "Old Password is incorrect"
      render :change_password
    end

  end
  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
