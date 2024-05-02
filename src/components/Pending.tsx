// import { paints } from "../services/fakePaintService";

// function Pending() {
//   function handleStatus() {
//     console.log("arrived");
//   }
//   return (
//     <div className="">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Product Name</th>
//             <th> </th>
//             <th>Category</th>
//             <th> </th>
//             <th>Quantity</th>
//             <th> </th>
//             <th>Price</th>
//             <th> </th>
//             <th>Supplier Info</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paints.map((paint) => (
//             <tr key={paint._id}>
//               <td>{paint.name}</td>
//               <td></td>
//               <td>{paint.category.name}</td>
//               <td></td>
//               <td>{paint.quantity}</td>
//               <td></td>
//               <td>{paint.price}</td>
//               <td></td>
//               <td>{paint.supplierInfo}</td>
//               <td>
//                 <div className="dropdown">
//                   <div
//                     tabIndex={0}
//                     role="button"
//                     className="btn m-1 btn btn-warning"
//                   >
//                     Pending
//                   </div>
//                   <ul
//                     tabIndex={0}
//                     className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//                   >
//                     <li>
//                       <a>Pending</a>
//                     </li>
//                     <li>
//                       <a onClick={handleStatus}>Arrived</a>
//                     </li>
//                   </ul>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Pending;
