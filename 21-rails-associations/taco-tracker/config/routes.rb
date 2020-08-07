Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "static#home", as: "home"
  get("/about_us", {to: "static#about", as: "about"})
  get "/kitties", to: "static#cats", as: "cats"


  # get "/tacos/new", to: "tacos#new"
  # post "/tacos", to: "tacos#create"
  # get "/tacos", to: "tacos#index" # < "controller#method"
  
  # get "/tacos/:id", to: "tacos#show", as: "something"
  resources :tacos
  resources :restaurants, only: [:index, :show, :new, :create]



end
