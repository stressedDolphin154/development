import "./App.css";
import { useEffect, useState } from "react";
import itemData from "./assets/item-data.json";
import StoreItems from "./components/StoreItems";

itemData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {

  const [cart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);
  
  const [itemArray, setItemArray] = useState(itemData);

  const [sportFilter, setSportFilters] = useState([]);
  const [brandFilter, setBrandFilters] = useState([]);


  const updatePrice = () => {
    let sum = 0; 
    cart.forEach( i=> sum += i.price);
    setPrice(sum);
  }

  useEffect( () => {
    updatePrice();
  }, [cart], [sportFilter])

  const sortItems = event => {
    const direction = event.target.value;
    if (direction === "og") {
      setItemArray([...itemData]);
      return;
    }
    const sorted = itemArray.sort((ele1, ele2) => {
      if (direction === "hToL") {
        return ele2.price - ele1.price;
      } else {
        return ele1.price - ele2.price;
      }
    });
    setItemArray([...sorted]);
  }

  const filterBySport = event => {

    const targetSport = event.target.value;
    const checked = event.target.checked;

    const index = sportFilter.indexOf(targetSport);

    let copy = [...sportFilter];

    if(checked){
      copy = [...sportFilter, targetSport]; 
      setSportFilters([...sportFilter, targetSport])
    } else {
      if(index > -1){
        copy = [...sportFilter];
        copy.splice(index, 1);
        setSportFilters(copy);
      }
    }
    console.log(sportFilter)
    if(copy.length === 0){
      setItemArray(itemData);
      
    } else {
      const filtered = itemData.filter(ele => {
      
        if (copy.includes(ele.sport)) {
          return true;
        } else {
          return false;
        }   
      
    });
    setItemArray(filtered);

    }
    
  }

  const sportFilterSetup = item => {
    if(sportFilter.length === 0){
      return true;  
    } else {
    
        if (sportFilter.includes(item.sport)) {
          return true;
        } else {
          return false;
        }   
      
    };

    }

    const brandFilterSetup = item => {
      if(brandFilter.length === 0){
        return true;  
      } else {
          if (brandFilter.includes(item.brand)) {
            return true;
          } else {
            return false;
          }   
        
      };
  
      }




  const filterByBrand = event => {
    const targetBrand = event.target.value;
    const checked = event.target.checked;

    const index = brandFilter.indexOf(targetBrand);

    let copy = [...brandFilter];

    if(checked){
      copy = [...brandFilter, targetBrand]; 
      setBrandFilters([...brandFilter, targetBrand])
    } else {
      if(index > -1){
        copy = [...brandFilter];
        copy.splice(index, 1);
        setBrandFilters(copy);
      }
    }
    
    if(copy.length === 0){
      setItemArray(itemData);
      
    } else {
      const filtered = itemData.filter(ele => {
        if (copy.includes(ele.brand)) {
          return true;
        } else {
          return false;
        }   
      
    });
    setItemArray(filtered);

    }
  }




  return (
    <div className="App">
      <h1>My Sport Store</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="item-container">

      {itemArray.filter((item) => sportFilterSetup(item)).filter((item) => brandFilterSetup(item)).map((item, index) => ( 
        <StoreItems item={item} cart={cart} updateCart={setCart}/>
      ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.map(e => <p>{e.name} {e.price}</p>)}
        <h3>Total Price = ${totalPrice}</h3>
      </div>

      <div>
        <h3>Sort By</h3>
        <label>
          <input type="radio" value="hToL" onClick={sortItems} name="sort"/>
          Price High to Low
        </label>
        <label>
          <input type="radio" value="lToH" onClick={sortItems} name="sort"/>
          Price Low to High
        </label>
        <label>
          <input type="radio" value="og" onClick={sortItems} name="sort"/>
          Popular
        </label>
      </div>

      <div>
        <h3>Filter by Sport</h3>
        <label>
        <input type="checkbox" 
               name="sport"
               onChange={filterBySport} 
               value="Soccer"/>
               Soccer
        </label>
        <label>
        <input type="checkbox" 
               name="sport"
               onChange={filterBySport} 
               value="Hockey"/>
              Hockey
        </label>
        <label>
        <input type="checkbox" 
               name="sport"
               onChange={filterBySport} 
               value="Lacrosse"/>
               Lacrosse
        </label>
      </div>

      <div>
        <h3>Filter by Brand</h3>
        <label>
        <input type="checkbox"
                onChange={filterByBrand}
                value="Nike"
                name="brand"
        /> 
          Nike
        </label>

        <label>
        <input type="checkbox"
                onChange={filterByBrand}
                value="Adidas"
                name="brand"
        /> 
          Adidas
        </label>
        <label>
        <input type="checkbox"
                onChange={filterByBrand}
                value="Bauer"
                name="brand"
        /> 
          Bauer
        </label>

      </div>
    
    </div>
  );
}

export default App;
