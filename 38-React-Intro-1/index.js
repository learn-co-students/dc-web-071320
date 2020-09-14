console.log("Are we here?")

const Text = () => {
  return(
    <div>
      <h1>Happy Monday!!</h1>
      <p>Nice Day!!</p>
    </div>
  )
}

const NavBar = (props) => {
  return(
    <div className={`ui inverted ${props.color} menu`}>
        <a className='item'>
          <h2 className="ui header">
              <i className={`${props.icon} icon`}></i>
              <div className="content">
                {props.text}
              </div>
          </h2>
        </a>
    </div> 
  )
}

const App = () => {
  return(
    <div>
      <NavBar 
      color="green"
      icon="paw" 
      text="dogs" />
      <Text />
    </div>
  )
}

ReactDOM.render(
  <App />
  ,
  document.getElementById('container')
)