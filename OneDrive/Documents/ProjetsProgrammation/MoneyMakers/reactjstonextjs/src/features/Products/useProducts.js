import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useLanguage } from "../../context/LanguageContext";

export function useProducts() {

    const { language } = useLanguage();
    
    const {
        isLoading, 
        data: products, 
        error
      } = useQuery({
        queryKey: ["products", language],
        queryFn: () => getProducts(language),
        retry: false
      })
    
      return {isLoading, error, products}
}