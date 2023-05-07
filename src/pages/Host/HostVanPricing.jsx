
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const [currentVan, setCurrentVan] = useOutletContext()
    return (
        <h2>${currentVan.price}.00/day</h2>
    )
}