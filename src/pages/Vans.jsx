import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export function loader() {
    return getVans()
}

function Vans(props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)
    const vans = useLoaderData()
    

    const typeFilter = searchParams.get('type')

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

    if(error) {
        return <h1>There was an error : {error.message}</h1>
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