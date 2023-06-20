import { useEffect, useState } from "react";
import Loader from "./Loader";
import Product from "./Product";

export default function RelatedProducts(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { details } = props;

    useEffect(() => {
        fetch(
            'https://grocery-store-8b1cb-default-rtdb.firebaseio.com/products.json'
        )
            .then((response) => response.json())
            .then((data) => {
                if (!data) {
                    setLoading(false);
                }
                setLoading(false);
                setProducts(data);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    useEffect(() => {
        // Fisher-Yates algorithm - shuffle an array randomly
        for (let i = products.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [products[i], products[j]] = [products[j], products[i]];
        }
    }, [products]);

    return (
        <div className="related-products">
            <h1>Similar items you might like</h1>
            <div className="related-products-content">
                {loading && <Loader />}
                {products.filter((product) => product.name !== details.name)
                    .slice(0, 4).map((product) => {
                        return (
                            <Product
                                key={product.id}
                                details={product}
                                onProductAdd={props.onProductAdd}
                                onProductDelete={props.onProductDelete}
                                onProductFavorite={props.onProductFavorite}
                                onProductFavoriteDelete={props.onProductFavoriteDelete}
                                cart={props.cart}
                            />
                        );
                    })}
            </div>
        </div>
    )
}