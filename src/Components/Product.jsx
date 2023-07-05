import { useContext } from "react";
import { MyContext } from "../Components/Context";
import styles from '../Pages/Home.module.css'
import { Products } from "../Procudct";
export function Product(props)
{
    let {addToCart,cart}=useContext(MyContext);
    
    return(
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={props.data.img} alt="Image" />
            </div>
            <p className={styles['product-name']}>{props.data.name}</p>
            <p className={styles['product-price']}>${props.data.price}</p>
            <button className={styles['add-to-cart']} onClick={()=>{addToCart(props.data.id)}}>Add to Cart{cart[props.data.id]>0&&` (${cart[props.data.id]})`}</button>
        </div>
    );
}