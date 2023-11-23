import React from "react";
import "./../styles/App.css";
import All from "./All";
import Cards from "./Cards";

const App = () => {

  const data = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://simplyhomecooked.com/wp-content/uploads/2022/08/buttermilk-pancakes-2.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/86/9d/db/canada-s-diner-double.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://vishal-raj-1.github.io/Awesome-JavaScript-Projects/assets/Images/foodCourt/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://cdn.jsdelivr.net/gh/john-smilga/react-projects@b3aa05dd5a6636c3f03968ba60ed734deda91f00/05-menu/setup/public/images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://res.cloudinary.com/drfgkfzk2/image/upload/v1607927020/foodmenu/lunch4_plwybh.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://vishal-raj-1.github.io/Awesome-JavaScript-Projects/assets/Images/foodCourt/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://qph.cf2.quoracdn.net/main-qimg-b9935e4d90ea104f74797d6dd6ad85a9.webp",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://pbs.twimg.com/media/EVhDJHHWoAAEbkB.jpg:large",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];





  return (
    <div>
      <All data={data}/>
    </div>
  );
};

export default App;
