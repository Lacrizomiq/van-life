import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

function Vans(props) {

    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)

    const typeFilter = searchParams.get('type')
    console.log(typeFilter)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await getVans()
            setVans(data)
            setLoading(false)
        }
        loadVans()
    }, [])

    const filteredVans = typeFilter 
    ? vans.filter(van => van.type === typeFilter)
    : vans

    const vanElements = filteredVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{search : `?${searchParams.toString()}`, type: typeFilter}}>
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if (loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
            <button 
                onClick={() => setSearchParams({type : "simple"})} 
                className={`van-type simple ${typeFilter === 'simple' ? "selected" : ""}`}
            >
                Simple Van
            </button> 
            <button 
                onClick={() => setSearchParams({type : "luxury"})} 
                className={`van-type luxury ${typeFilter === 'luxury' ? "selected" : ""}`}
            >
                Luxury Van
            </button> 
            <button 
                onClick={() => setSearchParams({type : "rugged"})} 
                className={`van-type rugged ${typeFilter === 'rugged' ? "selected" : ""}`}
            >
                Rugged Van</button> 
            {searchParams.has("type") &&
            <button 
                onClick={() => setSearchParams(searchParams.delete('type'))} 
                className="van-type clear-filters"
            >
                Clear filter
            </button>}
          </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans