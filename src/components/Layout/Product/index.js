import clsx from "clsx";
import styles from "./Product.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import Mobile from "./Mobile";
import Tablet from "./Tablet";
import Laptop from "./Laptop";
import Clock from "./Clock";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Product(props) {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([<Laptop laptop={props.laptop} />, <Clock clock={props.clock} />])
    const [count, setCount] = useState(0)
    const span = useRef()
    const handleAddProduct = () => {
        setProducts((prev) => [...prev, product[count]])
        if (count > product.length - 1) {
            span.current.innerText = 'Đã hết sản phẩm'
        }

    }

    return (
        <>
            <Mobile mobile={props.mobile} />
            <Tablet tablet={props.tablet} />
            {
                products.map((value, index) => {
                    return value
                })
            }
            <div onClick={() => { handleAddProduct(); setCount(count + 1) }} className={clsx(styles.wrapper)}>
                <button className={clsx(styles.btn)}>
                    <span ref={span} className={clsx(styles.text)}>Xem thêm</span>
                    <FontAwesomeIcon className={clsx(styles.icon)} icon={faCaretDown}></FontAwesomeIcon>
                </button>
            </div>
            {/* <Laptop />
            <Clock /> */}
        </>

    );
}

export default Product;