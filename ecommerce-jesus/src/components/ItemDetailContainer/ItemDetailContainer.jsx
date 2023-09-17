import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from '../../firebase/client';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      try {
        const gameDocRef = doc(db, "products", id);
        const gameDocSnap = await getDoc(gameDocRef);

        if (gameDocSnap.exists()) {
          const gameData = gameDocSnap.data();
          setDetail(gameData);
        } else {
          console.log("No se encontró el juego con el ID proporcionado.");
        }
      } catch (error) {
        console.error("Error al obtener los datos del juego:", error);
      }
    };

    getGame();
  }, [id]);

  return <ItemDetail detail={detail} />;
};

export default ItemDetailContainer;