// import React from 'react'
// import {FaHeart, FaRegHeart} from 'react-icons/fa'

// function Movie({item}) {
//   return (
//     <div>
//         <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
//               <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item?.title} />

//               <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
//               <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
//                 {item?.title}
//                 </p>
//                 <p>
//                   {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' />  :<FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
//                 </p>
//               </div>
            
//             </div>
//     </div>
//   )
// }

// export default Movie



// import React, { useState } from 'react';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// // start
// import { UserAuth } from '../context/AuthContext';
// import { db } from '../firebase';
// import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
// // end
// function Movie({ item }) {
//   const [like, setLike] = useState(false);
//   // start
//   const [saved, setSaved] = useState(false);
//   const {user} =UserAuth();
//   const movieID = doc (db, 'users', `${user?.email}`)
//   const saveShow =async ()=>{
//     if(user?.email){
//       setLike(!like);
//       setSaved(true);
//       await updateDoc(movieID,{
//         savedShows:arrayUnion({
//           id:item.id,
//           title:item.title,
//           img:item.backdrop_path
//         })
//       })
//     } else{
//       alert('Please log in to save a movie');
//     }
//   }
//   // end

//   const toggleLike = () => {
//     setLike(!like);
//   };

//   return (
//     <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
//       <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item?.title} />

//       <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
//         <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
//           {item?.title}
//         </p>
//         {/* <p onClick={toggleLike}> */}
//         <p  onClick={saveShow}>
//           {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Movie;


// import React, { useState } from 'react';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { UserAuth } from '../context/AuthContext';
// import { db } from '../firebase';
// import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

// function Movie({ item }) {
//   const [like, setLike] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const { user } = UserAuth();

//   const saveShow = async () => {
//     if (user?.email) {
//       try {
//         const movieID = doc(db, 'users', user.email);
//         await updateDoc(movieID, {
//           savedShows: arrayUnion({
//             id: item.id,
//             title: item.title,
//             img: item.backdrop_path
//           })
//         });
//         setLike(true);
//         setSaved(true);
//       } catch (error) {
//         console.error("Error saving the show:", error);
//       }
//     } else {
//       alert('Please log in to save a movie');
//     }
//   };

//   return (
//     <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
//       <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item?.title} />

//       <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
//         <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
//           {item?.title}
//         </p>
//         <p onClick={saveShow}>
//           {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Movie;



import {FaHeart, FaRegHeart} from 'react-icons/fa';
import React, {useState} from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase'; 
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'; 

const Movie = ({item, sendDataToParent }) => {

    const [like , setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async ()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows:arrayUnion({
            id:item.id,
            title: item.title,
            Image: item.backdrop_path
        })
        })
      } else {
        alert('Please log in to save a movie');
      }
    }


    const handleClick = (id) => {
        sendDataToParent(id);
    };
    
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img  className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p onClick={()=> handleClick(item.id)} className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        <p onClick={saveShow}>
            {like ? <FaHeart className='absolute top-4 left-4 text-grey-300'/> : <FaRegHeart className='absolute top-4 left-4 text-grey-300'/>}
        </p>
        </div>
    </div>
  )
}

export default Movie
