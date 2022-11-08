import clsx from "clsx";
import styles from "./News.module.scss"
import { useState, useEffect, useRef } from "react";
function News() {
    const [dataImage, setdataImage] = useState([])
    useEffect(() => {

        fetch('http://localhost:3001/imageNew')
            .then((response) => response.json())
            .then((data) => setdataImage(data));

    }, [])
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.wrapper)}>
                {
                    dataImage.map((img) => {
                        return <img key={img.id} src={img.src} alt="" className={clsx(styles.img)} />
                    })
                }
            </div>
        </div>
    );
}

export default News;