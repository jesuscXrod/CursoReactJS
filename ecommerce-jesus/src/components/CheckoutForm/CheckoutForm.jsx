import { useState } from "react"
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="row test-form">
            <form className="col" onSubmit={handleConfirm}>
                <div className="row">
                    <div class="input-field col s12">
                        <input id="name" type="text" value={name} onChange={({target}) => setName(target.value)} />
                        <label for="name">Name</label>
                    </div>
                    <div class="input-field col s12">
                        <input type="text" value={phone} onChange={({target}) => setPhone(target.value)} />
                        <label>Phone</label>
                    </div>
                    <div class="input-field col s12">
                        <input type="text" value={email} onChange={({target}) => setEmail(target.value)} />
                        <label>E-Mail</label>
                    </div>
                    <div>
                        <button className="btn waves-effect waves-light" type="submit">Crear Orden
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm