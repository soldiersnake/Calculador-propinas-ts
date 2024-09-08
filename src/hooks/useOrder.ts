import { useState } from "react"
import { MenuItem, OrderItem } from "../types";

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip]     = useState(0);

    const addItem = (item: MenuItem) => {
        //chequeamos si ya existe o no la orden
        const itemExist = order.find(orderItem => orderItem.id === item.id);
        //si es true no lo duplicamos aunq podemos aumentarle la cantidad
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem);
            setOrder(updatedOrder);
        }else{ //agregamos el item al arr si no existe
            const newItem = {...item, quantity:1};
            setOrder([...order, newItem]);
        }
    }    

    const removeItem = (id:MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
        
    }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}