import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getGame = async () =>{
            const response = await fetch('/data/productos.json')
            const game = await response.json()
            const filteredGame = game.find(juego => juego.id === parseInt(id))
            setDetail(filteredGame)
        }
        getGame()
    }, [id])

    return(
        <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer;