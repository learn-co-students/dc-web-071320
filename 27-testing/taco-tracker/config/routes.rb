Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "static#home", as: "home"
  get("/about_us", {to: "static#about", as: "about"})
  get "/kitties", to: "static#cats", as: "cats"

  get '/login', to: "sessions#login"
  post "/login", to: "sessions#process_login"
  delete "/logout", to: "sessions#logout"

  get "/change_password", to: "users#change_password"
  post "/change_password", to: "users#update_password"


  resources :tacos
  resources :restaurants, only: [:index, :show, :new, :create]
  resources :users, only: [:new, :create]
  resources :favorites, only: [:new, :create, :index]

  get "/tacos/:taco_name/:id", to: "tacos#show", as: "named_taco_path"
  delete "/ihatetacos/:id", to: "tacos#destroy", as: "hate"
  get "/taco_delete", to: "tacos#delete_taco"
  post "/taco_delete", to: "tacos#murder_taco"
  

end
