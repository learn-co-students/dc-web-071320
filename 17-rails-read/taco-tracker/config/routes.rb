Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", to: "tacos#home", as: "home"
  get("/about_us", {to: "tacos#about", as: "about"})
  get "/cats", to: "tacos#cats"


  # taco urls
        #V path
  get "/tacos", to: "tacos#index" # < "controller#method"
  # ^type of request

  get "/tacos/:id", to: "tacos#show", as: "taco"

end
