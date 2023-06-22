import ProductInfo from "./ProductInfo";

export default function Favorite(props) {
    const { cart } = props;

    const favorites = cart.reduce(
        (total, product) => total + (product.favorite ? 1 : 0),
        0
    );

    return (
        <div className="favorite">
            <div className="favorite-content">
                <h1>Favorites <span>({favorites} items)</span></h1>
                {cart.length === 0 && (
                    <p>You have not added any favorite product.</p>
                )}
                <div className="favorite-content-products">
                    {cart.filter(product => product.favorite).map((product) => {
                        return (
                            <ProductInfo
                                key={product.id}
                                product={product}
                                onProductAdd={props.onProductAdd}
                                onProductDelete={props.onProductDelete}
                                onProductFavorite={props.onProductFavorite}
                                onProductFavoriteDelete={props.onProductFavoriteDelete} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}