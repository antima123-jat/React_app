import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const dataArray = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry',
'Orange',
'Grapes',
'Watermelon',
'Strawberry',
'Pineapple',
'Mango',
'Peach',
'Pear',
'Kiwi',
'Cherry',
'Plum',
'Blueberry',
'Raspberry',
'Blackberry',
'Cranberry',
'Lemon',
'Lime',
'Grapefruit',
'Apricot',
'Nectarine',
'Passionfruit',
'Pomegranate',
'Fig',
'Papaya',
'Coconut',
'Guava',
'Lychee',
'Dragonfruit',
'Avocado',
'Melon',
'Cantaloupe',
'Honeydew',
'Cucumber',
'Tomato',
'Eggplant',
'Bell pepper',
'Carrot',
'Broccoli',
'Cauliflower',
'Cabbage',
'Spinach',
'Lettuce',
'Kale',
'Celery',
'Asparagus',
'Green beans',
'Peas',
'Brussels sprouts',
'Artichoke',
'Beetroot',
'Radish',
'Turnip',
'Sweet potato',
'Potato',
'Onion',
'Garlic',
'Shallot',
'Leek',
'Ginger',
'Parsley',
'Cilantro',
'Basil',
'Thyme',
'Rosemary',
'Oregano',
'Mint',
'Dill',
'Chives',
'Coriander',
'Sage',
'Marjoram',
'Tarragon',
'Fennel',
'Cinnamon',
'Nutmeg',
'Cardamom',
'Clove',
'Vanilla',
'Chili pepper',
'Bell pepper',
'Jalapeño',
'Serrano',
'Habanero',
'Pumpkin',
'Butternut squash',
'Acorn squash',
'Zucchini',
'Beet',
'Rutabaga',
'Mushroom',
'Elderberry',
'Gooseberry',
'Currant',
'Cranberry',
'Kiwifruit',
'Carambola',
'Persimmon',
'Plantain',
];
const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredArray = dataArray.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredArray);
  };

  return (
    <div className='App'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;

