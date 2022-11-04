import Header from "../../Layout/Header";
import clsx from "clsx";
import styles from "./Home.module.scss"
function Home() {
    return (
        <>
            <div className={clsx(styles.container)}>

                <Header />
                <h1>Home page</h1>
            </div>
        </>
    );
}

export default Home;