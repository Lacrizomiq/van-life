import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
            })
    }, [params.id])

    /* const to get back to the previous filtered search in the link */
    const search = location.state?.search || ""

    /* const to change the text of the button if a filter was applied */
    const type = location.state?.type || "all"
    
    return (
       <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span></p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading ...</h2>}
       </div>
    )
}