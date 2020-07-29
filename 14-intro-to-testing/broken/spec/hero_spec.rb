require_relative '../config/environment.rb'

# Process
# organize groups of our test cases by functionality
# at least on test case for each method
  # set up our data (arrange)
  # make any changes to your application (act) (OPTIONAL)
  # state our expectation (assert)

RSpec.describe Hero do
  let(:thor) {
    abilities = [
        {
            name: 'Super Strength',
            coolness: 3
        },
        {
            name:'Flight',
            coolness: 5
        },
        {
            name: 'Lighting Blast',
            coolness: 10
        }
    ]
    thor = Hero.new(abilities)
  }

  it "#abilities returns the abilities for the Hero" do
    # arrange, act?, assert

    expect(thor.abilities).to eq(abilities)
  end

  it "#ability_names returns the names of abilities for the Hero" do

    expect(thor.ability_names).to eq(['Super Strength', 'Flight', 'Lighting Blast'])
  end

  it "#coolest_ability returns the ability with the greatest coolness" do
    expect(thor.coolest_ability).to eq({
        name: 'Lighting Blast',
        coolness: 10
    })
  end
  it "#coolest_ability returns the newly added ability with the greatest coolness" do
    # Act
    abilities = thor.abilities
    abilities << {
            name: 'Telepath',
            coolness: 1000
    }

    thor.abilities = abilities

    # Assert
    expect(thor.coolest_ability).to eq({
            name: 'Telepath',
            coolness: 1000
        })

  end

  it "#ordered_abilities returns the ability names in alphabetical order" do

    expect(thor.ordered_abilities).to eq(['Flight', 'Lighting Blast', 'Super Strength'])
  end
end

#
# # Arrange
# thor = Hero.new([
#     {
#         name: 'Super Strength',
#         coolness: 3
#     },
#     {
#         name:'Flight',
#         coolness: 5
#     },
#     {
#         name: 'Lighting Blast',
#         coolness: 10
#     }
# ])
#
# puts thor.abilities == [
#     {
#         name: 'Super Strength',
#         coolness: 3
#     },
#     {
#         name:'Flight',
#         coolness: 5
#     },
#     {
#         name: 'Lighting Blast',
#         coolness: 10
#     }
# ]
#
# puts thor.ability_names == ['Super Strength', 'Flight', 'Lighting Blast']
# puts thor.coolest_ability == {
#     name: 'Lighting Blast',
#     coolness: 10
# }
# puts thor.ordered_abilities == ['Flight', 'Lighting Blast', 'Super Strength']
#
# # Act (optional)
# thor.abilities = [
#     {
#         name: 'Super Strength',
#         coolness: 3
#     },
#     {
#         name:'Flight',
#         coolness: 5
#     },
#     {
#         name: 'Lighting Blast',
#         coolness: 10
#     },
    {
        name: 'Telepath',
        coolness: 1000
    }
# ]
# puts thor.coolest_ability == {
#     name: 'Telepath',
#     coolness: 1000
# }
