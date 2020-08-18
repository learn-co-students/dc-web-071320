class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_user
    # ^^ whenever you have a method that you will be 
    # calling from a view

    def logged_in?
        !!session[:user_id]
        # !!nil = false
        # !!27 - true
    end

    def current_user
        if logged_in?
            return User.find(session[:user_id])
        else
            return nil
        end
    end
end
