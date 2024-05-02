import { useContext } from "react";
// import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const {user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const {data:payments=[]} = useQuery({
        queryKey: ['payments',user?.email],
        queryFn: async ()=>{
           const res = await axiosSecure.get(`/payments/${user.email}`)
           return res.data;
        }
    })
    return (
        <div>
            {/* <SectionTitle heading="Payment History" subHeading="All payments!"></SectionTitle> */}
            <div className="">
                <h1 className="text-3xl font-semibold text-emerald-600 text-center my-8">Payment History</h1>
            </div>
        
        <div className="mb-6">
            <h1 className="text-2xl font-semibold text-emerald-600">Total Payment: {payments.length}</h1>
        </div>
        <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
            {/* head */}
            <thead>
            <tr className="bg-amber-300">
                <th>#</th>
                <th>Price</th>
                <th>Transaction id</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {
                payments.map((payment,i) =><tr key={payment._id}>
                    <th>{i+1}</th>
                    <td>{payment.price}</td>
                    <td className="text-emerald-600">{payment.transactionId}</td>
                    <td className="text-red-600">{payment.status}</td>
                    <td>{payment.date}</td>
                </tr>)
            }
      

            </tbody>
        </table>
        </div>
        
        
        
        </div>
    );
};

export default PaymentHistory;