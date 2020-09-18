import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
state ={ 
  stocks : [], 
  portfolioStocks: [], 
  type: "All", 
  sort: "All"
}
  
componentDidMount(){ 
  fetch('http://localhost:3000/stocks')
  .then(res => res.json())
  .then(stocksArray => this.setState({ stocks : stocksArray}) ) 

}

addStock = (id) => { 
  
  // let newStock = this.state.stocks.find(stock => stock.id == id)
  if(!this.state.portfolioStocks.includes(id)){
  this.setState({ 
    portfolioStocks: [...this.state.portfolioStocks, id]
  })
}
}

removeStock = (id) => { 
  // let byeBye = this.state.portfolioStocks.find(stock => stock.id == id)
  // let newArray = [...this.state.portfolioStocks.filter(stock => stock !== byeBye)]
  // this.setState({ 
  //   portfolioStocks: newArray
  
  // })

  this.setState({ 
    portfolioStocks: this.state.portfolioStocks.filter(stockIds => stockIds !== id)
  })
  
}
changeFilter = (value) => { 
  
  this.setState({ 
    type: value 
  })
}

changeSort = (value) => { 
  this.setState({ 
    sort: value 
  })

}
stocksDisplay = () => { 
  let filteredStocks = [...this.state.stocks]
   if(this.state.type !== "All"){ 
     filteredStocks = filteredStocks.filter(stock => stock.type === this.state.type)
   }

  if(this.state.sort !== "All"){ 

    if(this.state.sort == "Alphabetically") return filteredStocks.sort((a,b) => a.name > b.name? 1: -1)
    if(this.state.sort == "Price") return filteredStocks.sort((a,b) => a.price < b.price? 1: -1)

  }
  return filteredStocks
}
  render() {
    let displayStocks = this.stocksDisplay()
    let myStocks = this.state.stocks.filter(stock => this.state.portfolioStocks.includes(stock.id))
    
    return (
      <div>
        <SearchBar  changeFilterProp={this.changeFilter} changeSortProp={this.changeSort} sortState={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayStocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={myStocks} removeStock={this.removeStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
