import React from 'react'

class Pet extends React.Component {
  render() {

    // let pet = this.props.pet
    let { pet } = this.props

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {/* condition ? true : false */}
            {/* condition ? true : (condition) ? true : false */}
            { pet.gender === "male" ? '♂' : (pet.gender === "female") ? '♀' : "unknown" }
            {/* {pet.gender === "male" ?'♂' : '♀' } */}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age} </p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          { 
          pet.isAdopted 
          ? <button className="ui disabled button">Already adopted</button>
          : <button className="ui primary button" onClick={() => this.props.adoptPet(pet.id)}>Adopt pet</button> 
          }
        </div>
      </div>
    )
  }
}

export default Pet
