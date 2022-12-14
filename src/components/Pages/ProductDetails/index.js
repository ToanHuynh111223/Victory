import styles from './ProductDetails.module.scss'
import clsx from 'clsx';
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faChevronLeft, faChevronRight, faRotateLeft, faShareFromSquare, faShield, faStar, faThumbsUp, faUserShield, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
function ProductDetails(props) {
    const [addProduct, getAddProduct] = useState()
    const { id } = useParams();
    const [numberProduct, setNumberProduct] = useState(1)
    const close = useRef();
    let count = 0
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
    const handleClosePopup = () => {

        close.current.className = clsx(`${styles.popup_detail} `)
        setNumberProduct(1)
    }
    const handleOpenPopup = () => {
        window.scrollTo(0, 0)
        close.current.className = clsx(`${styles.popup_detail} ${styles.active} `)
    }
    const handleAddProduct = (product) => {
        if (addProduct) {
            props.setListCart((prev) => [...prev, addProduct])
        }
        else props.setListCart((prev) => [...prev, product])
        close.current.className = clsx(`${styles.popup_detail} `)
        setNumberProduct(1)
        product.amount.push(numberProduct)

    }
    const handleDecreseNumberProduct = () => {
        if (numberProduct > 1) {

            setNumberProduct(numberProduct - 1)
        } else setNumberProduct(1)
    }
    return (
        <>

            <div className={clsx(styles.container)}>

                <Header />
                <Navbar numberCart={props.numberCart} setNumberCart={props.setNumberCart} />

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
                                                {product.imgdetail.map((img, index) => { return (<div className={clsx(styles.clock)} key={index}><img src={img} key={index} className={clsx(styles.img)} /> </div>) })}
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
                                                <p>H?? g?? ?????i n???y 12 th??ng t???i 3364 si??u th??? to??n qu???c (mi???n ph?? th??ng ?????u)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>B???o h??nh ch??nh h??ng ??i???n tho???i 1 n??m t???i c??c trung t??m b???o h??nh h??ng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>B??? s???n ph???m g???m: H???p, S??ch h?????ng d???n, C??y l???y sim, C??p Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Th??ng s??? k??? thu???t</p>
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
                                            <p>Khuy???n m??i</p>
                                            <p>Gi?? v?? khuy???n m??i d??? ki???n ??p d???ng ?????n 23:59 | 15/11</p>
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
                                    <button className={clsx(styles.block_buy)} onClick={() => { handleOpenPopup() }}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={close} className={clsx(styles.popup_detail)}>
                            <div className={clsx(styles.bg_detail)}></div>
                            <div className={clsx(styles.choose_promo)}>
                                <div onClick={() => { handleClosePopup() }} className={clsx(styles.close)}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </div>
                                <div className={clsx(styles.name_pro)}>
                                    <span className={clsx(styles.name_product)}>{product.name}</span>
                                    <span className={clsx(styles.cost)}>{product.cost_current}
                                        <strike>{product.cost_sale}</strike>
                                    </span>
                                </div>
                                <div className={clsx(styles.img_box)}>
                                    <div className={clsx(styles.img_pro)}>
                                        <img src={`.${product.img}`} />
                                    </div>
                                </div>
                                <div className={clsx(styles.choose_amount)}>
                                    <span>Ch???n s??? l?????ng: </span>
                                    <div className={clsx(styles.choose_number)}>
                                        <button className={clsx(styles.choose_minus)} onClick={() => handleDecreseNumberProduct()}>-</button>
                                        <span className={clsx(styles.number)}>{numberProduct} </span>
                                        <button className={clsx(styles.choose_plus)} onClick={() => setNumberProduct(numberProduct + 1)} >+</button>

                                    </div>
                                </div>
                                <button className={clsx(styles.add_product)} onClick={() => { getAddProduct(product); handleAddProduct(product); }}>Th??m v??o gi??? h??ng</button>
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
                                                <p>H?? g?? ?????i n???y 12 th??ng t???i 3364 si??u th??? to??n qu???c (mi???n ph?? th??ng ?????u)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>B???o h??nh ch??nh h??ng ??i???n tho???i 1 n??m t???i c??c trung t??m b???o h??nh h??ng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>B??? s???n ph???m g???m: H???p, S??ch h?????ng d???n, C??y l???y sim, C??p Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Th??ng s??? k??? thu???t</p>
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
                                            <p>Khuy???n m??i</p>
                                            <p>Gi?? v?? khuy???n m??i d??? ki???n ??p d???ng ?????n 23:59 | 15/11</p>
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
                                    <button className={clsx(styles.block_buy)} onClick={() => { handleOpenPopup() }}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={close} className={clsx(styles.popup_detail)}>
                            <div className={clsx(styles.bg_detail)}></div>
                            <div className={clsx(styles.choose_promo)}>
                                <div onClick={() => { handleClosePopup() }} className={clsx(styles.close)}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </div>
                                <div className={clsx(styles.name_pro)}>
                                    <span className={clsx(styles.name_product)}>{product.name}</span>
                                    <span className={clsx(styles.cost)}>{product.cost_current}
                                        <strike>{product.cost_sale}</strike>
                                    </span>
                                </div>
                                <div className={clsx(styles.img_box)}>
                                    <div className={clsx(styles.img_pro)}>
                                        <img src={`.${product.img}`} />
                                    </div>
                                </div>
                                <div className={clsx(styles.choose_amount)}>
                                    <span>Ch???n s??? l?????ng: </span>
                                    <div className={clsx(styles.choose_number)}>
                                        <button className={clsx(styles.choose_minus)} onClick={() => handleDecreseNumberProduct()}>-</button>
                                        <span className={clsx(styles.number)}>{numberProduct} </span>
                                        <button className={clsx(styles.choose_plus)} onClick={() => setNumberProduct(numberProduct + 1)} >+</button>

                                    </div>
                                </div>
                                <button className={clsx(styles.add_product)} onClick={() => { getAddProduct(product); handleAddProduct(product); }}>Th??m v??o gi??? h??ng</button>
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
                                                <p>H?? g?? ?????i n???y 12 th??ng t???i 3364 si??u th??? to??n qu???c (mi???n ph?? th??ng ?????u)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>B???o h??nh ch??nh h??ng ??i???n tho???i 1 n??m t???i c??c trung t??m b???o h??nh h??ng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>B??? s???n ph???m g???m: H???p, S??ch h?????ng d???n, C??y l???y sim, C??p Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Th??ng s??? k??? thu???t</p>
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
                                            <p>Khuy???n m??i</p>
                                            <p>Gi?? v?? khuy???n m??i d??? ki???n ??p d???ng ?????n 23:59 | 15/11</p>
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
                                    <button className={clsx(styles.block_buy)} onClick={() => { handleOpenPopup() }}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={close} className={clsx(styles.popup_detail)}>
                            <div className={clsx(styles.bg_detail)}></div>
                            <div className={clsx(styles.choose_promo)}>
                                <div onClick={() => { handleClosePopup() }} className={clsx(styles.close)}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </div>
                                <div className={clsx(styles.name_pro)}>
                                    <span className={clsx(styles.name_product)}>{product.name}</span>
                                    <span className={clsx(styles.cost)}>{product.cost_current}
                                        <strike>{product.cost_sale}</strike>
                                    </span>
                                </div>
                                <div className={clsx(styles.img_box)}>
                                    <div className={clsx(styles.img_pro)}>
                                        <img src={`.${product.img}`} />
                                    </div>
                                </div>
                                <div className={clsx(styles.choose_amount)}>
                                    <span>Ch???n s??? l?????ng: </span>
                                    <div className={clsx(styles.choose_number)}>
                                        <button className={clsx(styles.choose_minus)} onClick={() => handleDecreseNumberProduct()}>-</button>
                                        <span className={clsx(styles.number)}>{numberProduct} </span>
                                        <button className={clsx(styles.choose_plus)} onClick={() => setNumberProduct(numberProduct + 1)} >+</button>

                                    </div>
                                </div>
                                <button className={clsx(styles.add_product)} onClick={() => { getAddProduct(product); handleAddProduct(product); }}>Th??m v??o gi??? h??ng</button>
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
                                                <p>H?? g?? ?????i n???y 12 th??ng t???i 3364 si??u th??? to??n qu???c (mi???n ph?? th??ng ?????u)</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                                                </div>
                                                <p>B???o h??nh ch??nh h??ng ??i???n tho???i 1 n??m t???i c??c trung t??m b???o h??nh h??ng</p>
                                            </li>
                                            <li>
                                                <div className={clsx(styles.policy_icon)}>
                                                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                                </div>
                                                <p>B??? s???n ph???m g???m: H???p, S??ch h?????ng d???n, C??y l???y sim, C??p Type C</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={clsx(styles.parameter)}>
                                        <p>Th??ng s??? k??? thu???t</p>
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
                                            <p>Khuy???n m??i</p>
                                            <p>Gi?? v?? khuy???n m??i d??? ki???n ??p d???ng ?????n 23:59 | 15/11</p>
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
                                    <button className={clsx(styles.block_buy)} onClick={() => { handleOpenPopup() }}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={close} className={clsx(styles.popup_detail)}>
                            <div className={clsx(styles.bg_detail)}></div>
                            <div className={clsx(styles.choose_promo)}>
                                <div onClick={() => { handleClosePopup() }} className={clsx(styles.close)}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </div>
                                <div className={clsx(styles.name_pro)}>
                                    <span className={clsx(styles.name_product)}>{product.name}</span>
                                    <span className={clsx(styles.cost)}>{product.cost_current}
                                        <strike>{product.cost_sale}</strike>
                                    </span>
                                </div>
                                <div className={clsx(styles.img_box)}>
                                    <div className={clsx(styles.img_pro)}>
                                        <img src={`.${product.img}`} />
                                    </div>
                                </div>
                                <div className={clsx(styles.choose_amount)}>
                                    <span>Ch???n s??? l?????ng: </span>
                                    <div className={clsx(styles.choose_number)}>
                                        <button className={clsx(styles.choose_minus)} onClick={() => handleDecreseNumberProduct()}>-</button>
                                        <span className={clsx(styles.number)}>{numberProduct} </span>
                                        <button className={clsx(styles.choose_plus)} onClick={() => setNumberProduct(numberProduct + 1)} >+</button>

                                    </div>
                                </div>
                                <button className={clsx(styles.add_product)} onClick={() => { getAddProduct(product); handleAddProduct(product); }}>Th??m v??o gi??? h??ng</button>
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