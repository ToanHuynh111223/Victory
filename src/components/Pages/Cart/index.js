import clsx from "clsx";
import styles from "./Cart.module.scss"
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import { useEffect, useState } from "react";
function Cart(props) {
    const [backToArray, setBackToArray] = useState([...new Set(props.listCart)])
    const [numberProductCart, setNumberProductCart] = useState(1)
    let array = [...backToArray]
    useEffect(() => {
        props.setNumberCart(array.reduce((init, value) => { return init + value.amount.reduce((init, value) => { return init + value }, 0) }, 0))
    })
    const handleRemoveProduct = (product, index) => {
        array.splice(index, 1)
        setBackToArray(array)
        props.setListCart(array)
        product.amount.splice(0, 999, 0)
    }
    const handleDecreaseNumberProductCart = (product) => {
        if (product.amount.reduce((init, value) => { return init + value }, 0) - 1 < 1) {
            product.amount.splice(0, 999, 1)
        }
        else product.amount.splice(0, 999, product.amount.reduce((init, value) => { return init + value }, 0) - 1)
        setNumberProductCart(numberProductCart - 1)

    }
    const handleIncreaseNumberProductCart = (product) => {
        product.amount.splice(0, 999, product.amount.reduce((init, value) => { return init + value }, 0) + 1)
        setNumberProductCart(numberProductCart + 1)
    }
    return (
        <>
            <div className={clsx(styles.container)}>
                <Header />
                <Navbar numberCart={props.numberCart} />
                <div className={clsx(styles.content)}>
                    <div className={clsx(styles.mycart)}><span>Giỏ hàng của bạn</span></div>
                    <div className={clsx(styles.row)}>
                        <div className={clsx(styles.col, styles.col_7)}>
                            <div className={clsx(styles.list_product)}>
                                <ul className={clsx(styles.list)}>
                                    {array.map((product, index) => {
                                        return (
                                            <li className={clsx(styles.item)} key={index} >
                                                <div className={clsx(styles.image)}>
                                                    <img src={product.img} />
                                                </div>
                                                <div className={clsx(styles.info)}>
                                                    <span>{product.name}</span>
                                                    <div className={clsx(styles.choose_number)}>
                                                        <button className={clsx(styles.choose_minus)} onClick={() => { handleDecreaseNumberProductCart(product) }}>-</button>
                                                        <span className={clsx(styles.number)} > {product.amount.reduce((init, value) => { return init + value }, 0)}</span>
                                                        <button className={clsx(styles.choose_plus)} onClick={() => { handleIncreaseNumberProductCart(product) }}>+</button>
                                                        <span onClick={() => { handleRemoveProduct(product, index) }}>Xóa</span>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.cost)}>
                                                    <strike>{product.cost_sale}</strike>
                                                    <span>{product.cost_current}</span>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className={clsx(styles.col, styles.col_5)}>
                            <div className={clsx(styles.order)}>
                                <div className={clsx(styles.order_name)}>

                                    <span >ĐẶT HÀNG</span>
                                </div>
                                <div className={clsx(styles.money)}>
                                    <div className={clsx(styles.temporary_money)}>
                                        <span>Tạm tính {props.numberCart} sản phẩm: </span>
                                        <span>{array.reduce((init, value) => {
                                            return (init + value.cost_calculate * value.amount.reduce((init, value) => { return init + value }, 0))
                                        }, 0).toLocaleString()}đ</span>
                                    </div>
                                    <div className={clsx(styles.total_money)}>
                                        <span>Tổng tiền: </span>
                                        <span>{array.reduce((init, value) => {
                                            return (init + value.cost_calculate * value.amount.reduce((init, value) => { return init + value }, 0))
                                        }, 0).toLocaleString()}đ</span>
                                    </div>
                                </div>
                                <button className={clsx(styles.pay)}>Thanh Toán Ngay</button>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;