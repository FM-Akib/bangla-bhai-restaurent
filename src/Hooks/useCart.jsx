
import {
    useQuery,
  } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const axioSecure = useAxiosSecure();

   const { isPending, error, data:cart=[] } = useQuery({
    queryKey: ['cart'],
    queryFn: async() =>{
        const res = await axioSecure.get('/carts')
        return res.data;
    }
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  
  return [cart];
};

export default useCart;