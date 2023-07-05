import { Products } from "../Procudct"
import { MyContext } from "../Components/Context"
import { useContext } from "react"
import { AddToCart } from "../Components/AddToCart"
import { useNavigate } from "react-router-dom"
import styles from '../Components/cart.module.css'
export function Cart()
{
    const navigate=useNavigate();
    const {cart,totalAmount}=useContext(MyContext);
    const addedToCart=Products.filter((product)=>
    {
        return cart[product.id]>0
    })
    return(
        <div className={styles['carted-container']}>
            {addedToCart.map((element)=>
            {
                return <AddToCart data={element}/>
            })}
        {totalAmount()?
        <div>
        <div>Subtotal:${totalAmount()}</div>
        <div className={styles['cart-buttons']}><button onClick={()=>navigate('/')}>Continue Shopping</button> <button>Checkout</button></div>
        </div>:<h1>Cart is Empty</h1>
        }
        </div>
    );
}