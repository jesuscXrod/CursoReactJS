import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(null);

  const handleConfirm = (event) => {
    event.preventDefault();

    // Verificar si algún campo está vacío
    if (!name || !phone || !email) {
      setFormError("Por favor, complete todos los campos.");
      return;
    }
    setFormError(null);

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="row test-form">
      <form className="col" onSubmit={handleConfirm}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            <label>Phone</label>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <label>E-Mail</label>
          </div>
          <div>
            <button className="btn waves-effect waves-light" type="submit">
              Crear Orden
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
        {formError && (
          <div className="red-text" style={{ marginTop: "10px" }}>
            {formError}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;