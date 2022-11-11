import styles from './ProductDetails.module.scss'
import clsx from 'clsx';
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import { useParams } from 'react-router-dom';
function ProductDetails(props) {
    const { id } = useParams()
    console.log(props)
    return (
        <>
            <div className={clsx(styles.container)}>

                <Header />
                <Navbar />
                {props.clock.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <h1>{product.name}</h1>
                    </div>)
                })}
                {props.laptop.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <h1>{product.name}</h1>
                    </div>)
                })}
                {props.mobile.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <h1>{product.name}</h1>
                    </div>)
                })}
                {props.tablet.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <h1>{product.name}</h1>
                    </div>)
                })}
            </div>
            <Footer />
        </>

    );
}

export default ProductDetails;