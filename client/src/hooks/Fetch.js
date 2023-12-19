// import {useEffect, useState} from "react"
// import axios from "axios"

// const getData=(url)=>{

//     const [data,SetData]=useState([]);
//     const [loading,SetLoading]=useState(false);
//     const [error,SetError]=useState(false);

//     useEffect(()=>{
//         const fetchData=async()=>{
//             SetLoading(true);
//             try {
//                 const res=await axios.get(url)
//                 SetData(res.data);
//             } catch (error) {
//                 SetError(error)
//             }
//             SetLoading(false);
//         };
//         fetchData();
//     },[url])


//     const refetch=async()=>{
//         SetLoading(true);
//         try {
//             const res=await axios.get(url)
//             SetData(res.data);
//         } catch (error) {
//             SetError(error)
//         }
//         SetLoading(false);
//     };
//     return {data,error,refetch,loading}
// }

// export default getData;

