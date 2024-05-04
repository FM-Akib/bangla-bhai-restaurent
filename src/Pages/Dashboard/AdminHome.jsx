import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ImUsers } from "react-icons/im";
import { RiFileList2Fill } from "react-icons/ri";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid , PieChart, Pie, Sector,  ResponsiveContainer, Legend} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const {user}  = useContext(AuthContext);

    const {data:stats = {}} = useQuery({
        queryKey:['adminstats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })
    // console.log(stats)

    const {data:chartData=[]} = useQuery({
        queryKey:['order-stats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/order-stats')
            return res.data;
        }
    })

    const pieChartData = chartData.map(data=>{
        return {name:data.category,value:data.revenue}
    })
    // console.log(chartData)
    return (
        <div>
            <div className="">
                <h1 className="text-2xl text-emerald-600 font-semibold">
                <span className="mr-2">Hi! Welcome</span>
                {
                    user?.displayName ? user.displayName : "Back," 
                }
                </h1>
            </div>

    <div className="">
           <section className="p-4 my-6 bg-gray-100 text-gray-800 rounded-md">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-100">
					<polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
					<path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
					<path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.orders}</p>
				<p className="capitalize">Orders</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
            <ImUsers className="text-white text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.users}</p>
				<p className="capitalize">Customers</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
            <RiFileList2Fill className="text-white text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.menuItems}</p>
				<p className="capitalize">Products</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
            <BiSolidBadgeDollar   className="text-white text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.revenue}</p>
				<p className="capitalize">Revenue</p>
			</div>
		</div>
	</div>
</section>
           </div>


{/* Charts Section */}
           <div className="flex">
              
              <div className="w-1/2">
              <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
              </div>




            <div className="w-1/2">
            <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
            </div>
           </div>
            
        </div>
    );
};

export default AdminHome;