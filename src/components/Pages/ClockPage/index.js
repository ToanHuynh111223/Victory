import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import Clock from "../../Layout/Product/Clock";
import New from "../../Layout/New";
import clsx from "clsx";
import styles from './ClockPage.module.scss';
function ClockPage() {
    return (
        <>

            <div className={clsx(styles.container)}>

                <Header />
                <Navbar />
                <New src='./imgNew/DCC8CCF7-A8BB-4741-86EF-0DCB5A653521-1200x300.png' />
                <Clock />
            </div>
            <Footer />
        </>
    );
}

export default ClockPage;