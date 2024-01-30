import '../Style/Categories.css';
import { BiSolidCategory } from "react-icons/bi";
import { IoGiftSharp } from "react-icons/io5";
import { FaGlassCheers } from "react-icons/fa";
import { IoWomanSharp } from "react-icons/io5";

import { GrPersonalComputer } from "react-icons/gr";


const Category = () => {
  return (
    <div className="background-container">

    <div>
      <nav className="navbar">
        <h2 className="navbar-item">Categories <BiSolidCategory />
</h2>

        <h2 className="navbar-item">Birthday Gifts <IoGiftSharp />
</h2>
        <h2 className="navbar-item">Occasions <FaGlassCheers />
</h2>
        <h2 className="navbar-item">Recipients <IoWomanSharp />
</h2>
        <h2 className="navbar-item">Anniversary Gifts  <IoGiftSharp /></h2>
        <h2 className="navbar-item">Personalised <GrPersonalComputer />
</h2>
      </nav>
      <h1 className="collections-title">Companies</h1>
      
      <div className="cards-list">
        {/* Add birthday cards here */}
      </div>

      <div className="cards-list">
        {/* Add anniversary gift cards here */}
      </div>

      <div className="cards-list">
        {/* Add occasion cards here */}
      </div>

      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            <img src="https://cdn.dribbble.com/users/954572/screenshots/16765270/amazon-gif.gif" alt="Card 1" />
          </div>
          <div className="card_title title-white">
            <p>Amazon</p>
          </div>
        </div>

        <div className="card 2">
          <div className="card_image">
            <img src="https://i.gifer.com/1upj.gif" alt="Card 2" />
          </div>
          <div className="card_title title-white">
            <p>Microsoft</p>
          </div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src="https://i.pinimg.com/originals/1f/4a/1f/1f4a1fc06e70307c410753faa8d83777.gif" alt="Card 3" />
          </div>
          <div className="card_title">
            {/* <p>Google</p> */}
          </div>
        </div>

        <div className="card 4">
          <div className="card_image">
            <img src="https://i.pinimg.com/originals/bc/cc/d5/bcccd5949d8dd217fd5a7a8a74d9f8fc.gif" alt="Card 4" />
          </div>
          <div className="card_title title-black">
            {/* <p>Intel</p> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Category;
