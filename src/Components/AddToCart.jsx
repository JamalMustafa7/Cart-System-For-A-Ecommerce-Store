import styles from './cart.module.css'
import { MyContext } from './Context';
import { useContext } from 'react';
import { Products } from '../Procudct';
export function AddToCart(props)
{
    const {cart,addToCart,removeFromCart,setCart}=useContext(MyContext);
    function changeAddToCart(id,value)
    {
        setCart((prev)=>({...prev,[id]:parseInt(value)}));
        
    }
   
    return(
        <div className={styles['cart-item']}>
            <div className={styles.imag}>
                <img src={props.data.img} alt="Image"/>
            </div>
            <div className={styles.descriptio}>
                <p className={styles['product-name']}>{props.data.name}</p>
                <p className={styles['product-price']}>${props.data.price}</p>
                <div className={styles.buttons}>
                    <input type='button' value="+" onClick={()=>addToCart(props.data.id)}/>
                    <input type='text' value={cart[props.data.id]} onChange={(event)=>changeAddToCart(props.data.id,event.target.value)}/>
                    <input type='button' value="-" onClick={()=>removeFromCart(props.data.id)}></input>
                </div>
            </div>
        </div>
    );
}