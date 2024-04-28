import { useState, useContext, createContext } from 'react';
import data from '../backend/dados'
const AppContext = createContext();
export const useCarrinho = () => useContext(AppContext);


export function AppProvider({
    children,
    onCarrinho
  }) {
    const [produtos, setProdutos] = useState({data});
    const [carrinho, setCarrinho] = useState([]);
    const [valueCarrinho, setValueCarrinho] = useState(0);
  
    
    const handleAcress = (id, value) => {
      
      const produto = { id, value };
      const lista = [...carrinho, produto];
      setCarrinho(lista);
      finalPrice();
      onCarrinho = true;
    };

    const handleDecres = (id, value) => {
      
        const produto = { id, value };
        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].id === id) {
                carrinho.splice(i, 1); 
                break; 
            }
        }
        finalPrice();
        setCarrinho(lista);
    
      };

      const finalPrice = () => {
        carrinho.forEach(function(value) {
            preco = valueCarrinho + value.price
            setValueCarrinho(preco)
          }); 
      }
  
    return (
      <AppContext.Provider
        value={{
          produtos,
          valueCarrinho,
          handleAcress,
          handleDecres
        }}>
        {children}
      </AppContext.Provider>
    );
  }