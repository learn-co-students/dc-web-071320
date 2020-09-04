Rails.application.routes.draw do
  
  # url: localhost:3000/instructors
  # url: localhost:3000/api/v1/instructors

  namespace :api do 
    namespace :v1 do 
      resources :instructors
      resources :students
    end
  end
  
end
