

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <aside className="w-full md:w-1/6 p-4 md:p-8 bg-white shadow-md">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden w-full p-2 bg-gray-100 text-left font-semibold rounded-md mb-4 flex justify-between items-center"
//       >
//         Categories
//         <svg
//           className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
//       <div className="md:hidden">
//         <div
//           className={`fixed inset-0 bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`}
//           onClick={() => setIsOpen(false)}
//         ></div>
//         <ul
//           className={`${isOpen ? 'block' : 'hidden'} md:block absolute top-0 left-0 w-full h-full bg-white z-50 p-4 transition-all duration-300 ease-in-out 
//           ${isOpen ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}
//         >
//           <div className="space-y-3">
//             <li><a href="#" className="block hover:text-blue-500 py-1">Topwear</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Bottomwear</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Official Merch</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Bestsellers</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Markdowns</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Juniors</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Accessories</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">My Membership</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Stores Near Me</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">Track My Order</a></li>
//             <li><a href="#" className="block hover:text-blue-500 py-1">More</a></li>
//           </div>
//         </ul>
//       </div>
//       {/* <ul className={`${isOpen ? 'block' : 'hidden'} md:block space-y-3`}> */}
//       <ul className="hidden md:block space-y-3">
//         <li><a href="#" className="block hover:text-blue-500 py-1">Topwear</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Bottomwear</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Official Merch</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Bestsellers</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Markdowns</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Juniors</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Accessories</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">My Membership</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Stores Near Me</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">Track My Order</a></li>
//         <li><a href="#" className="block hover:text-blue-500 py-1">More</a></li>
//       </ul>
//     </aside>
//   );
// };
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full md:w-1/6 p-4 md:p-8 bg-white shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full p-2 bg-gray-100 text-left font-semibold rounded-md mb-4 flex justify-between items-center"
      >
        Categories
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul className={`${isOpen ? 'block' : 'hidden'} md:block space-y-3`}>
        <li><a href="#" className="block hover:text-blue-500 py-1">Topwear</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Bottomwear</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Official Merch</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Bestsellers</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Markdowns</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Juniors</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Accessories</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">My Membership</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Stores Near Me</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">Track My Order</a></li>
        <li><a href="#" className="block hover:text-blue-500 py-1">More</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;