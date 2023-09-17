import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../firebase/client";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
  
    try {
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "products");
  
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where("id", "in", ids.map(id => id.toString())))
      );
  
      const { docs } = productsAddedFromFirestore;
  
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;
  
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
  
      if (outOfStock.length === 0) {
        const total = cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
  
        if (isNaN(total)) {
          console.error("El valor de total no es un número válido:", total);
          return;
        }
  
        const objOrder = {
          buyer: {
            name,
            phone,
            email,
          },
          items: cart,
          total: total,
          date: Timestamp.fromDate(new Date()),
        };
  
        await batch.commit();
  
        const orderCollection = collection(db, "orders");
        const orderAdded = await addDoc(orderCollection, objOrder);
  
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.log("Error de stock");
      }
    } catch (error) {
      console.log("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return <h1>Se está generando su orden</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;