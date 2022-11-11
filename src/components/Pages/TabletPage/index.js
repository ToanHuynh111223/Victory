import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import Tablet from "../../Layout/Product/Tablet";
import New from "../../Layout/New";
import clsx from "clsx";
import styles from './TabletPage.module.scss';
function TabletPage(props) {
    return (
        <>

            <div className={clsx(styles.container)}>

                <Header />
                <Navbar />
                <New src='./imgNew/800-200-800x200-45.png' />
                <Tablet tablet={props.tablet} />
            </div>
            <Footer />
        </>
    );
}
export default TabletPage;