import styles from './ProductDetails.module.scss'
import clsx from 'clsx';
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faChevronLeft, faChevronRight, faRotateLeft, faShareFromSquare, faShield, faStar, faThumbsUp, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
function ProductDetails(props) {
    const { id } = useParams()
    let count = 0
    // const [countPrev, setCountPrev] = useState(0)
    const slide = useRef()
    let lengthImgdetail;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleNext = () => {
        count--
        if (count < -lengthImgdetail + 1) {
            count = 0
        }
        slide.current.style.transform = `translateX(calc(${count}*(100%)))`;
    }

    const handlePrev = () => {
        count++;
        if (count > 0) {
            count = -lengthImgdetail + 1;
        }
        slide.current.style.transform = `translateX(calc(${count}*100%))`;
    }



    return (
        <>
            <div className={clsx(styles.container)}>

                <Header />
                <Navbar />

                {props.clock.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    lengthImgdetail = product.imgdetail.length
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <div className={clsx(styles.header)}>
                            <div className={clsx(styles.info_product)}>
                                <h1 className={clsx(styles.name_product)}>{product.name}</h1>
                                <div className={clsx(styles.rate)}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className={clsx(styles.like_share)}>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    Like
                                </button>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                    Share
                                </button>
                            </div>
                        </div>
                        <div className={clsx(styles.main)}>
                            <div className={clsx(styles.row)}>
                                <div className={clsx(styles.col, styles.col_7)}>
                                    <div className={clsx(styles.show_slide)}>

                                        <div className={clsx(styles.box_slide)}>
                                            <div ref={slide} className={clsx(styles.slide)}>
                                                {product.imgdetail.map((img, index) => { return (<div className={clsx(styles.clock)}><img src={img} key={index} className={clsx(styles.img)} /> </div>) })}
                                            </div>
                                        </div>
                                        <button onClick={() => { handlePrev() }} className={clsx(styles.prev)}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button onClick={() => { handleNext() }} className={clsx(styles.next)}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                    <div className={clsx(styles.policy)}>
                                        <ul className={clsx(styles.policy_list)}>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon>
                                                </div>
                                                <p>Hư gì đổi nấy 12 tháng tại 3364 siêu thị toàn quốc (miễn phí tháng đầu)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Thông số kỹ thuật</p>
                                        <ul className={clsx(styles.parameter_list)}>
                                            {product.parameter.map((value, index) => {
                                                return (<li key={index} className={clsx(styles.parameter_item)}>
                                                    <p className={clsx(styles.lileft)} >{value[0]}</p>
                                                    <div className={clsx(styles.liright)}><p>{value[1]}</p></div>
                                                </li>)
                                            })}

                                        </ul>
                                    </div>
                                </div>
                                <div className={clsx(styles.col, styles.col_5)}>
                                    <div className={clsx(styles.price_one)}>
                                        <div className={clsx(styles.box_price)}>
                                            <p className={clsx(styles.cost_current)}>{product.cost_current}</p>
                                            <p className={clsx(styles.cost_sale)}>{product.cost_sale}</p>
                                            <p className={clsx(styles.cost_percent)}>{product.percent}</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles.block_promo)}>
                                        <div className={clsx(styles.pr_top)}>
                                            <p>Khuyến mãi</p>
                                            <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 15/11</p>
                                        </div>
                                        <div className={clsx(styles.content)}>
                                            <div className={clsx(styles.pr_item)}>
                                                <ul className={clsx(styles.list)}>
                                                    {product.pr_content.map((pr, index) => {
                                                        return (<li key={index} className={clsx(styles.item)}>
                                                            <span className={clsx(styles.number)}>{index + 1}</span>
                                                            <div className={clsx(styles.item_right)}>

                                                                <p >{pr}</p>
                                                            </div>
                                                        </li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={clsx(styles.block_buy)}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
                {props.laptop.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    lengthImgdetail = product.imgdetail.length
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <div className={clsx(styles.header)}>
                            <div className={clsx(styles.info_product)}>
                                <h1 className={clsx(styles.name_product)}>{product.name}</h1>
                                <div className={clsx(styles.rate)}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className={clsx(styles.like_share)}>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    Like
                                </button>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                    Share
                                </button>
                            </div>
                        </div>
                        <div className={clsx(styles.main)}>
                            <div className={clsx(styles.row)}>
                                <div className={clsx(styles.col, styles.col_7)}>
                                    <div className={clsx(styles.show_slide)}>

                                        <div className={clsx(styles.box_slide)}>
                                            <div ref={slide} className={clsx(styles.slide)}>
                                                {product.imgdetail.map((img, index) => { return <img src={img} key={index} className={clsx(styles.img)} /> })}
                                            </div>
                                        </div>
                                        <button onClick={() => { handlePrev() }} className={clsx(styles.prev)}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button onClick={() => { handleNext() }} className={clsx(styles.next)}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                    <div className={clsx(styles.policy)}>
                                        <ul className={clsx(styles.policy_list)}>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon>
                                                </div>
                                                <p>Hư gì đổi nấy 12 tháng tại 3364 siêu thị toàn quốc (miễn phí tháng đầu)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Thông số kỹ thuật</p>
                                        <ul className={clsx(styles.parameter_list)}>
                                            {product.parameter.map((value, index) => {
                                                return (<li key={index} className={clsx(styles.parameter_item)}>
                                                    <p className={clsx(styles.lileft)} >{value[0]}</p>
                                                    <div className={clsx(styles.liright)}><p>{value[1]}</p></div>
                                                </li>)
                                            })}

                                        </ul>
                                    </div>
                                </div>
                                <div className={clsx(styles.col, styles.col_5)}>
                                    <div className={clsx(styles.price_one)}>
                                        <div className={clsx(styles.box_price)}>
                                            <p className={clsx(styles.cost_current)}>{product.cost_current}</p>
                                            <p className={clsx(styles.cost_sale)}>{product.cost_sale}</p>
                                            <p className={clsx(styles.cost_percent)}>{product.percent}</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles.block_promo)}>
                                        <div className={clsx(styles.pr_top)}>
                                            <p>Khuyến mãi</p>
                                            <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 15/11</p>
                                        </div>
                                        <div className={clsx(styles.content)}>
                                            <div className={clsx(styles.pr_item)}>
                                                <ul className={clsx(styles.list)}>
                                                    {product.pr_content.map((pr, index) => {
                                                        return (<li key={index} className={clsx(styles.item)}>
                                                            <span className={clsx(styles.number)}>{index + 1}</span>
                                                            <div className={clsx(styles.item_right)}>

                                                                <p >{pr}</p>
                                                            </div>
                                                        </li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={clsx(styles.block_buy)}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
                {props.mobile.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    lengthImgdetail = product.imgdetail.length
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <div className={clsx(styles.header)}>
                            <div className={clsx(styles.info_product)}>
                                <h1 className={clsx(styles.name_product)}>{product.name}</h1>
                                <div className={clsx(styles.rate)}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className={clsx(styles.like_share)}>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    Like
                                </button>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                    Share
                                </button>
                            </div>
                        </div>
                        <div className={clsx(styles.main)}>
                            <div className={clsx(styles.row)}>
                                <div className={clsx(styles.col, styles.col_7)}>
                                    <div className={clsx(styles.show_slide)}>

                                        <div className={clsx(styles.box_slide)}>
                                            <div ref={slide} className={clsx(styles.slide)}>
                                                {product.imgdetail.map((img, index) => { return <img src={img} key={index} className={clsx(styles.img)} /> })}
                                            </div>
                                        </div>
                                        <button onClick={() => { handlePrev() }} className={clsx(styles.prev)}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button onClick={() => { handleNext() }} className={clsx(styles.next)}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                    <div className={clsx(styles.policy)}>
                                        <ul className={clsx(styles.policy_list)}>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon>
                                                </div>
                                                <p>Hư gì đổi nấy 12 tháng tại 3364 siêu thị toàn quốc (miễn phí tháng đầu)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Thông số kỹ thuật</p>
                                        <ul className={clsx(styles.parameter_list)}>
                                            {product.parameter.map((value, index) => {
                                                return (<li key={index} className={clsx(styles.parameter_item)}>
                                                    <p className={clsx(styles.lileft)} >{value[0]}</p>
                                                    <div className={clsx(styles.liright)}><p>{value[1]}</p></div>
                                                </li>)
                                            })}

                                        </ul>
                                    </div>
                                </div>
                                <div className={clsx(styles.col, styles.col_5)}>
                                    <div className={clsx(styles.price_one)}>
                                        <div className={clsx(styles.box_price)}>
                                            <p className={clsx(styles.cost_current)}>{product.cost_current}</p>
                                            <p className={clsx(styles.cost_sale)}>{product.cost_sale}</p>
                                            <p className={clsx(styles.cost_percent)}>{product.percent}</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles.block_promo)}>
                                        <div className={clsx(styles.pr_top)}>
                                            <p>Khuyến mãi</p>
                                            <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 15/11</p>
                                        </div>
                                        <div className={clsx(styles.content)}>
                                            <div className={clsx(styles.pr_item)}>
                                                <ul className={clsx(styles.list)}>
                                                    {product.pr_content.map((pr, index) => {
                                                        return (<li key={index} className={clsx(styles.item)}>
                                                            <span className={clsx(styles.number)}>{index + 1}</span>
                                                            <div className={clsx(styles.item_right)}>

                                                                <p >{pr}</p>
                                                            </div>
                                                        </li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={clsx(styles.block_buy)}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
                {props.tablet.filter(product => `${product.id}${product.name}` === id).map((product, index) => {
                    lengthImgdetail = product.imgdetail.length
                    return (<div key={index} className={clsx(styles.wrapper)}>
                        <div className={clsx(styles.header)}>
                            <div className={clsx(styles.info_product)}>
                                <h1 className={clsx(styles.name_product)}>{product.name}</h1>
                                <div className={clsx(styles.rate)}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className={clsx(styles.like_share)}>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    Like
                                </button>
                                <button className={clsx(styles.btn)}>
                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                    Share
                                </button>
                            </div>
                        </div>
                        <div className={clsx(styles.main)}>
                            <div className={clsx(styles.row)}>
                                <div className={clsx(styles.col, styles.col_7)}>
                                    <div className={clsx(styles.show_slide)}>

                                        <div className={clsx(styles.box_slide)}>
                                            <div ref={slide} className={clsx(styles.slide)}>
                                                {product.imgdetail.map((img, index) => { return <img src={img} key={index} className={clsx(styles.img)} /> })}
                                            </div>
                                        </div>
                                        <button onClick={() => { handlePrev() }} className={clsx(styles.prev)}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button onClick={() => { handleNext() }} className={clsx(styles.next)}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                    <div className={clsx(styles.policy)}>
                                        <ul className={clsx(styles.policy_list)}>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon>
                                                </div>
                                                <p>Hư gì đổi nấy 12 tháng tại 3364 siêu thị toàn quốc (miễn phí tháng đầu)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Thông số kỹ thuật</p>
                                        <ul className={clsx(styles.parameter_list)}>
                                            {product.parameter.map((value, index) => {
                                                return (<li key={index} className={clsx(styles.parameter_item)}>
                                                    <p className={clsx(styles.lileft)} >{value[0]}</p>
                                                    <div className={clsx(styles.liright)}><p>{value[1]}</p></div>
                                                </li>)
                                            })}

                                        </ul>
                                    </div>
                                </div>
                                <div className={clsx(styles.col, styles.col_5)}>
                                    <div className={clsx(styles.price_one)}>
                                        <div className={clsx(styles.box_price)}>
                                            <p className={clsx(styles.cost_current)}>{product.cost_current}</p>
                                            <p className={clsx(styles.cost_sale)}>{product.cost_sale}</p>
                                            <p className={clsx(styles.cost_percent)}>{product.percent}</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles.block_promo)}>
                                        <div className={clsx(styles.pr_top)}>
                                            <p>Khuyến mãi</p>
                                            <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 15/11</p>
                                        </div>
                                        <div className={clsx(styles.content)}>
                                            <div className={clsx(styles.pr_item)}>
                                                <ul className={clsx(styles.list)}>
                                                    {product.pr_content.map((pr, index) => {
                                                        return (<li key={index} className={clsx(styles.item)}>
                                                            <span className={clsx(styles.number)}>{index + 1}</span>
                                                            <div className={clsx(styles.item_right)}>

                                                                <p >{pr}</p>
                                                            </div>
                                                        </li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={clsx(styles.block_buy)}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
            <Footer />
        </>

    );
}

export default ProductDetails;