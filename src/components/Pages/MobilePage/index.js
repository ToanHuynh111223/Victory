import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import Mobile from "../../Layout/Product/Mobile";
import New from "../../Layout/New";
import styles from './MobilePage.module.scss';
import clsx from "clsx";
function MobilePage(props) {
    return (
        <>

            <div className={clsx(styles.container)}>

                <Header />
                <Navbar />
                <New src='./imgNew/800-200-800x200-63.png' />
                <Mobile mobile={props.mobile} />
            </div>
            <Footer />
        </>
    );
}

export default MobilePage;