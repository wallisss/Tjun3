// youtube.com/watch?v=R8rmfD9Y5-c
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Book', price: 1000 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];
const filteredItems = items.filter(
    (item) =>    //function item return ...
    {
        return item.price <= 100;//<100
    }
);
console.log(items);
console.log(filteredItems);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const itemNames = items.map(  //The map() method creates a new array populated with the results of 
    //calling a provided function on every element in the calling array.
    //const map1 = array1.map(x => x * 2);
    (everyElement) =>    //function item return ...
    {
        return everyElement.name;//only names
    }
);
//cool 
console.log(`%c Item.names:%c ${itemNames}`,"font-weight:bold","color:green");//('Item.names:' + itemNames); 
console.log(itemNames);
console.log(items);

const itemFind = items.find(
    (item) =>    //function item return ...
    {
        return item.name === 'Book';//only firs item
    }
);
console.log(itemFind);
console.log(items);

items.forEach(
    (eachElement) => {
        console.log(eachElement.name);
    }
);
console.log(itemFind);
console.log(items);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const hasInexpansiveItems = items.some( //return if pass true :false
    (item) =>    //function item return ...
    {
        return item.price <= 100;//<100
    }
);
console.log(items);
console.log(hasInexpansiveItems);

const hasInexpansiveItemsII = items.every( //return if pass true :false
    (item) =>    //function item return ...
    {
        return item.price <= 100;//false
    }
);
console.log(items);
console.log(hasInexpansiveItemsII);

const totalPrice = items.reduce(
    (curentTotal, item) =>    //function item return ...
    {
        return item.price + curentTotal;
    }, 0
);
console.log(items);
console.log(totalPrice);

const itemsII=[1,2,3,4,5,2];
const includeTwo=itemsII.includes(2);
console.log(itemsII);
console.log(includeTwo);


