
import {
    useQuery,
  } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useCart = () => {
    const axioSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)

   const { isPending, error, data:cart=[] ,refetch} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async() =>{
        const res = await axioSecure.get(`/carts?email=${user?.email}`)
        return res.data;
    }
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  
  return [cart,refetch];
};

export default useCart;