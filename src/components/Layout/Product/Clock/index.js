import clsx from "clsx";
import styles from "./Clock.module.scss"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Clock() {
    const [products, getProducts] = useState([])

    useEffect(() => {

        fetch('http://localhost:3001/productsClock')
            .then((response) => response.json())
            .then((data) => getProducts(data));

    }, [])
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.row)}>
                {products.map((product) => {
                    return (
                        <div key={product.id} className={clsx(styles.col, styles.col_3)}>
                            <Link to='/ProductPage' onClick={() => { handleSetProduct(product) }} >
                                <div className={clsx(styles.wrapper_product)}>
                                    <div className={clsx(styles.wrapper_img)}>
                                        <img src={product.img} className={clsx(styles.img)}></img>
                                    </div>
                                    <div className={clsx(styles.wrapper_info)}>

                                        <h3 className={clsx(styles.name)}>{product.name}</h3>
                                        <div className={clsx(styles.item)}>
                                            <span className={clsx(styles.item_name)}>{product.item[0]}</span>
                                            <span className={clsx(styles.item_name)}>{product.item[1]}</span>
                                        </div>
                                        <div className={clsx(styles.sale)}>
                                            <p className={clsx(styles.cost_sale)}>{product.cost_sale}</p>
                                            <span className={clsx(styles.percent)}>{product.percent}</span>
                                        </div>
                                        <strong className={clsx(styles.cost_current)}>{product.cost_current}</strong>

                                    </div>
                                </div>
                            </Link>
                        </div>


                    )
                })
                }

            </div>
        </div>
    );
}

export default Clock;