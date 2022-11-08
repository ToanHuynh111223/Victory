import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import News from "../../Layout/News";
import Product from "../../Layout/Product";
import clsx from "clsx";
import styles from "./Home.module.scss"

function Home() {
    return (
        <>
            <div className={clsx(styles.container)}>

                <Header />
                <Navbar />
                <News />
                <Product />
            </div>
        </>
    );
}

export default Home;