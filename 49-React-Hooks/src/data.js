import React, { useState, useEffect } from 'react'

const Data = () => {

    const [summary, changeSummary] = useState([])

    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
        .then(res => res.json())
        .then(info => changeSummary(info.Countries))
    },[])


    return(<div>
        {summary.map(country => <h4>Cases: {country.TotalConfirmed}</h4>)}
    </div>)
}

export default Data