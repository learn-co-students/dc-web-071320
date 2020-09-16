import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilter = (type) => {
    // debugger
    this.setState({
      filters: {
        // type: type
        type
      }
    })
  }

  fetchPets = () => {
    // debugger
    let url = ""

    if(this.state.filters.type === "all"){
      url = "/api/pets"
    }else{
      url = `/api/pets?type=${this.state.filters.type}`
    }

    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({
        // pets: pets
        pets
      })
    })

  }

  adoptPet = (petId) => {
    // debugger
    let newPetsArray = this.state.pets.map(pet => {
      if(pet.id === petId){
        // return {...pet, isAdopted: true}
        pet.isAdopted = true
      }
      return pet
    })

    // console.log(newPetsArray)
    this.setState({
      pets: newPetsArray
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              changeFilter={this.changeFilter}
              fetchPets={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              adoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
