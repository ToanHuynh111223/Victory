import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import Laptop from "../../Layout/Product/Laptop";
import New from "../../Layout/New";
import clsx from "clsx";
import styles from './LaptopPage.module.scss';
function LaptopPage(props) {
    return (
        <>

            <div className={clsx(styles.container)}>

                <Header />
                <Navbar />
                <New src='./imgNew/banner-cao-cao-desktop-1200x200.png' />
                <Laptop laptop={props.laptop} />
            </div>
            <Footer />
        </>
    );
}
export default LaptopPage;