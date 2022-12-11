const Product = ({ title, image, price }) => {




    return (
        <div className="card">
            <img src={image} />
            {title}
            <button>Add ({price}$)</button>
        </div>
    )
}

export default Product