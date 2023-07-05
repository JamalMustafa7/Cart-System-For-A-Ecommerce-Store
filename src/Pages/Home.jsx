import { Products } from "../Procudct";
import { Product } from "../Components/Product";
import styles from "./Home.module.css";

export function Home()
{
    
    return(
        <div className={styles.products}>
            {Products.map(element => {
              return <Product data={element} />  
            })}
        </div>
    );
}