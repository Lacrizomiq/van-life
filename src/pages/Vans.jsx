import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans(props) {

    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('type')
    console.log(typeFilter)

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const filteredVans = typeFilter 
    ? vans.filter(van => van.type === typeFilter)
    : vans

    const clearFilter = () => {
        setSearchParams(searchParams.delete('type'))
    }

    const vanElements = filteredVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
            <Link to="/vans?type=simple" className="van-type simple">Simple Van</Link> 
            <Link to="/vans?type=luxury" className="van-type luxury">Luxury Van</Link> 
            <Link to="/vans?type=rugged" className="van-type rugged">Rugged Van</Link> 
            <button onClick={clearFilter} className="van-type clear-filters">Clear filter</button>
          </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans