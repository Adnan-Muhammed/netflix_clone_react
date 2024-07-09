


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Movie from "./Movie"
// import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

// const Row = ({ title, fetchURL, rowID }) => {
//   const [movies, setMovies] = useState([])

//   const [like,setLike]= useState(false)

//   useEffect(() => {
//     axios.get(fetchURL).then((response) => {
//       setMovies(response.data.results)
//     })
//   }, [fetchURL])

//   console.log(movies);


//   const sliderLeft =()=>{
//     var slider = document.getElementById('slider' + rowID);
//     slider.scrollLeft =slider.scrollLeft -500;
//   }

  
//   const sliderRight =()=>{
//     var slider = document.getElementById('slider' + rowID);
//     slider.scrollRight =slider.scrollRight +500;
//   }



//   return (
//     <div>
//       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
//       <div className='relative flex items-center'>
//         <MdChevronLeft
//         onClick={sliderLeft}
//          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
//         <div id={'slider' + rowID}
//         className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'  >
//           {movies.map((item, id) => (
            
//             <Movie key={id} item={item}/>
//           ))}
//         </div>
//         <MdChevronRight 
//         onClick={sliderRight}
//         className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

//       </div>
//     </div>
//   )
// }

// export default Row



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Movie from "./Movie";
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// const Row = ({ title, fetchURL, rowID }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get(fetchURL).then((response) => {
//       setMovies(response.data.results);
//     });
//   }, [fetchURL]);

//   // Function to scroll left
//   const sliderLeft = () => {
//     const slider = document.getElementById('slider' + rowID);
//     if (slider) {
//       slider.scrollLeft -= 500; // Adjust the scroll amount as needed
//     }
//   };

//   // Function to scroll right
//   const sliderRight = () => {
//     const slider = document.getElementById('slider' + rowID);
//     if (slider) {
//       slider.scrollLeft += 500; // Adjust the scroll amount as needed
//     }
//   };

//   return (
//     <div>
//       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
//       <div className='relative flex items-center'>
//         {/* Left scroll icon */}
//         <MdChevronLeft
//           onClick={sliderLeft}
//           className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block'
//           size={40}
//         />
//         {/* Movie slider container */}
//         <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
//           {movies.map((item, id) => (
//             <Movie key={id} item={item} />
//           ))}
//         </div>
//         {/* Right scroll icon */}
//         <MdChevronRight
//           onClick={sliderRight}
//           className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block'
//           size={40}
//         />
//       </div>
//     </div>
//   );
// };

// export default Row;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Movie from "./Movie";
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// const Row = ({ title, fetchURL }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get(fetchURL).then((response) => {
//       setMovies(response.data.results);
//     });
//   }, [fetchURL]);

//   return (
//     <div>
//       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
//       <div className='relative flex items-center'>
//         <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block' size={40} />
//         <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
//           {movies.map((item) => (
//             <Movie key={item.id} item={item} />
//           ))}
//         </div>
//         <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block' size={40} />
//       </div>
//     </div>
//   );
// };

// export default Row;














import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  // Function to scroll left
  const sliderLeft = () => {
    const slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft -= 500; // Adjust the scroll amount as needed
    }
  };

  // Function to scroll right
  const sliderRight = () => {
    const slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft += 500; // Adjust the scroll amount as needed
    }
  };

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        {/* Left scroll icon */}
        <MdChevronLeft
          onClick={sliderLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block'
          size={40}
        />
        {/* Movie slider container */}
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        {/* Right scroll icon */}
        <MdChevronRight
          onClick={sliderRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block'
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
