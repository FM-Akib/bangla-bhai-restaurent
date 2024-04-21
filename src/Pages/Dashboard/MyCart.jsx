

const MyCart = () => {
    return (
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-center text-emerald-600 text-3xl font-bold">My Carts </h1>
          </div>

          <div className="w-full">
            <div className="bg-emerald-50 rounded p-7 w-4/5 mx-auto mt-10">
              
              <div className="flex justify-between items-center mb-10">
                <h1 className="text-xl font-semibold">Total Orders:</h1>
                <h1 className="text-xl font-semibold">Total Price:</h1>
                <button className="btn btn-primary">Pay</button>
              </div>

              <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
      
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
   
    </tbody>
 
  </table>
</div>

            </div>
          </div>
        </div>
    );
};

export default MyCart;