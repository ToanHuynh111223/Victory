import clsx from "clsx";
import styles from "./New.module.scss"
function New(props) {
    return (<div className={clsx(styles.container)}>
        <div className={clsx(styles.wrapper)}>
            <img src={props.src} alt="" className={clsx(styles.img)} />
        </div>
    </div>);
}

export default New;