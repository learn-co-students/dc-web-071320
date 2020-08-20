require 'rails_helper'

RSpec.describe "Taco Views", type: :system do 

    describe 'index pages have correct content' do 

        before(:each) do 
            r = Restaurant.create()
            @taco = Taco.create(name: "Yummy Taco", price: 5, vegetarian: false, restaurant: r)
            @taco2 = Taco.create(name: "Yummy Taco2", price: 5, vegetarian: true, restaurant: r)
        end

        it 'index page shows the right content' do 
            visit tacos_path
            expect(page).to have_content("All Tacos")
        end

        it 'index page lists all tacos' do 
            visit tacos_path
            expect(page).to have_content("Yummy Taco")
            expect(page).to have_content("Yummy Taco2")
        end
    end

    describe 'can create new taco with form' do 

        before(:each) do
            ApplicationController.any_instance.stub(:logged_in?).and_return(true)
            User.stub(:find).and_return(User.new)
            User.any_instance.stub(:username).and_return("test")
            
            @restaurant_name = "My Restaurant"
            r = Restaurant.create(name: @restaurant_name)
        end

        it 'loads the new form' do 
            visit new_taco_path
            expect(page).to have_content("Create a new taco")
        end

        it 'processes the taco form' do 
            visit new_taco_path

            fill_in "taco[name]", with: "My Taco Name"
            fill_in "taco[price]", with: 3
            select "true", :from => "taco[vegetarian]"
            within("select#taco_restaurant_id") do
                select @restaurant_name
            end
            
            click_on "Make a New Taco"
            expect(page).to have_content @restaurant_name
        end
    end
end