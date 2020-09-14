import React from 'react'


export const NavBar = (props) => {
    // console.log(props)
    return(
        <div>
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
        </div>
    )
}

// export default NavBar

// <div>
// <div className="ui inverted blue menu">
//    <a className='item'>
//    <h2 className="ui header">
//        <i className="paint brush icon"></i>
//        <div className="content">
//            PaintApp
//        </div>
//    </h2>
//    </a>
// </div> 
// </div>