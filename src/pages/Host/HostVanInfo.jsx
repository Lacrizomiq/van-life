
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const [currentVan, setCurrentVan] = useOutletContext()
    return (
        <div>
        <p>Name : {currentVan.name}</p>
        <p>Category : {currentVan.type}</p>
        <p>Description : {currentVan.description}</p>
        <p>Visibility : Public</p>
        </div>
    )
}