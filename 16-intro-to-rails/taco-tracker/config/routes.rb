Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", to: "tacos#home", as: "home"
  get("/about_us", {to: "tacos#about", as: "about"})

end
