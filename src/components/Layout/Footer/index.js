import clsx from 'clsx';
import styles from './Footer.module.scss'
import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.wrapper)}>
                <div className={clsx(styles.row)}>
                    <div className={clsx(styles.col, styles.col_4)}>
                        <ul className={clsx(styles.list)}>
                            <li className={clsx(styles.item)}><Link >Tích điểm Quà tặng VIP</Link></li>
                            <li className={clsx(styles.item)}><Link>Lịch sử mua hàng</Link></li>
                            <li className={clsx(styles.item)}><Link>Tìm hiểu về mua trả góp</Link></li>
                            <li className={clsx(styles.item)}><Link>Chính sách bảo hành</Link></li>
                            <li className={clsx(styles.item)}><Link>Giao hàng & Thanh toán</Link></li>
                            <li className={clsx(styles.item)}><Link>Hướng dẫn mua online</Link></li>
                        </ul>
                    </div>
                    <div className={clsx(styles.col, styles.col_4)}>
                        <ul className={clsx(styles.list)}>
                            <li className={clsx(styles.item)}><Link>Giới thiệu công ty (MWG.cn)</Link></li>
                            <li className={clsx(styles.item)}><Link>Tuyển dụng</Link></li>
                            <li className={clsx(styles.item)}><Link>Gửi góp ý, khiếu nại</Link></li>
                            <li className={clsx(styles.item)}><Link>Tìm siêu thị(3.364 shop)</Link></li>
                        </ul>
                    </div>
                    <div className={clsx(styles.col, styles.col_4)}>
                        <ul className={clsx(styles.list)}>
                            <li className={clsx(styles.item)}>Tổng đài hỗ trợ (Miễn phí gọi) </li>
                            <li className={clsx(styles.item)}><Link>Gọi mua: 1800.1060 (7:30 - 22:00)</Link></li>
                            <li className={clsx(styles.item)}><Link>Kỹ thuật: 1800.1763 (7:30 - 22:00)</Link></li>
                            <li className={clsx(styles.item)}><Link>Khiếu nại: 1800.1062 (8:00 - 21:30)</Link></li>
                            <li className={clsx(styles.item)}><Link>Bảo hành: 1800.1064 (8:00 - 21:00)</Link></li>

                        </ul>
                    </div>
                    <div className={clsx(styles.col, styles.col_4)}>
                        <h3 className={clsx(styles.title)}>Được chứng nhận:</h3>
                        <div className={clsx(styles.certificate)}>

                            <img src='../imgCertificate/certification.4beff0d90e02a7eee6df.png' />
                            <img src='../imgCertificate/handle_cert.png' />
                        </div>
                    </div>
                </div>
                <p >© 2022. Công ty cổ phần Victory GPDKKD: 0303234568 do sở KH & ĐT TP.HCM cấp ngày 23/08/2002</p>
            </div>

        </div>
    );
}

export default Footer;
