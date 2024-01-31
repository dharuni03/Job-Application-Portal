// import  { useState } from 'react';
// import '../Style/Jobs.css';

// function Jobs() {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Software Engineer', price: 549, quantity: 1 },
//     { id: 2, name: 'Maison Margiela Future Sneakers', price: 870, quantity: 1 },
//     { id: 3, name: 'Our Legacy Brushed Scarf', price: 349, quantity: 1 },
//   ]);

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <div className="sc">
//       <div className="tl">
//         Jobs
//       </div>
//       {cartItems.map((item) => (
//         <div className="it" key={item.id}>
//           <div className="bt">
//             <span className="da"></span>
//             <span className="la"></span>
//           </div>
//           <div className="im">
//             <img src={'https://assets-global.website-files.com/62e95dddfb380a0e61193e7d/634970c7cbeed5644711b937_62fd57ccd6890f25796f92f9_AdobeStock_295461823.jpeg' }alt="" width={'190px'}/>
//             <img src={'https://static.tnn.in/thumb/msid-106601115,thumbsize-51594,width-1280,height-720,resizemode-75/106601115.jpg' }alt="" width={'190px'}/>

//             {/* <img src={`https://designmodo.com/demo/shopping-cart/item-${item.id}.png`} alt="" /> */}
//           </div>
//           <div className="dc">
//             <span>{item.name}</span>
//             <span>{item.description}</span>
//             <span>{item.color}</span>
//           </div>
//           <div className="qt">
//             {/* <button className="pb" onClick={() => updateQuantity(item.id, item.quantity - 1)}> */}
//               {/* <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" /> */}
//             {/* </button> */}
//             <input type="text" name="name" value={item.quantity} />
//             <button className="mb" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//               {/* <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" /> */}
//             </button>
//           </div>
//           <div className="tp">${item.price * item.quantity}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Jobs;
// src/components/Jobs.jsx

import { useState } from 'react';
import '../Style/Jobs.css';

function Jobs() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Software Engineer', quantity: 1 },
    { id: 2, name: 'Digital Entrepreneur', price: 870, quantity: 1 },
    { id: 3, name: 'Managing Director', price: 349, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getImageSource = (itemId) => {
    switch (itemId) {
      case 1:
        return 'https://assets-global.website-files.com/62e95dddfb380a0e61193e7d/634970c7cbeed5644711b937_62fd57ccd6890f25796f92f9_AdobeStock_295461823.jpeg';
      case 2:
        return 'https://static.tnn.in/thumb/msid-106601115,thumbsize-51594,width-1280,height-720,resizemode-75/106601115.jpg';
      case 3:
        // Add the URL for the third image
        return 'https://hearst-images.s3.amazonaws.com/getty/8b239009dc514a7e83c5c9477d5071d3.jpg';
      default:
        return '';
    }
  };

  return (
    <div className="sc">
      <div className="tl"></div>
      {cartItems.map((item) => (
        <div className="it" key={item.id}>
          <div className="bt">
            <span className="da"></span>
            <span className="la"></span>
          </div>
          <div className="im">
            <img src={getImageSource(item.id)} alt="" width={'190px'} />
          </div>
          <div className="dc">
            <span>{item.name}</span>
            {/* Add additional details if needed */}
          </div>
          <div className="qt">
            {/* Add minus button if needed */}
            <input type="text" name="name" value={item.quantity} />
            <button className="mb" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              {/* Add plus button if needed */}
            </button>
          </div>
          {/* <div className="tp">${item.price * item.quantity}</div> */}
        </div>
      ))}
    </div>
  );
}

export default Jobs;
