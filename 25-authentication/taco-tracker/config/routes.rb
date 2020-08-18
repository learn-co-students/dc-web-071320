Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "static#home", as: "home"
  get("/about_us", {to: "static#about", as: "about"})
  get "/kitties", to: "static#cats", as: "cats"
  get '/login', to: "sessions#login"
  post "/login", to: "sessions#process_login"
  delete "/logout", to: "sessions#logout"


  # get "/tacos/new", to: "tacos#new"
  # post "/tacos", to: "tacos#create"
  # get "/tacos", to: "tacos#index" # < "controller#method"
  
  # get "/tacos/:id", to: "tacos#show", as: "something"
  # get "/my_great_taco/:id", to: "tacos#show", as: "taco"
  resources :tacos
  resources :restaurants, only: [:index, :show, :new, :create]

  delete "/ihatetacos/:id", to: "tacos#destroy", as: "hate"
  get "/taco_delete", to: "tacos#delete_taco"
  post "/taco_delete", to: "tacos#murder_taco"

end
