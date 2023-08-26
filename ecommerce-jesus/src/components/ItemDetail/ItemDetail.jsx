import './ItemDetail.css'

const ItemDetail = ({detail}) => {
    
    return(
        <>
            <div key={detail.id} className="col">
            <div className="detail-card">
              <div className="card-image">
                <img className="detail-image" src={detail.imagen} alt={detail.titulo} />
              </div>
              <div className="detail-card-content">
                <div className="detail-card-title">
                  <h2>{detail.titulo}</h2>
                </div>
                <div className='detail-description'>
                  <p><span>Descripción:</span> {detail.descripcion}</p>
                  <p><span>Año de lanzamiento: </span>{detail.anioLanzamiento}</p>
                  <p><span>Precio:</span> ${detail.precio}</p>
                  <p>Sin Stock</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default ItemDetail;