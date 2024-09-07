import { Header } from "./components/Header"
import Menuitem from "./components/Menuitem";
import OrderContents from "./components/OrderContents";
import { menuItems } from './data/db';
import useOrder from "./hooks/useOrder";


function App() {

  const { order, addItem, removeItem } = useOrder();

  
  return (
    <>
    <Header/>
    
    <main className=" max-w-7xl mx-auto my-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black">Menu</h2>
        <div className="space-y-3 mt-10">
          {menuItems.map(item => (
            <Menuitem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        <OrderContents
          order={order}
          removeItem={removeItem}
        />
        
      </div>
    </main>
      
    </>
  )
}

export default App
