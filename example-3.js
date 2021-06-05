//https://youtu.be/v2tJ3nzXh8I
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
function calculatePrice(price, taxes, description) {
    //if(taxes==null||undefined){tahes=0.05};// or  taxes=taxes ?? 0.05;
    taxes = taxes ?? 0.05;//if taxes=null or undefined then use 0.05
    description = description ?? 'Default item';
    const total = price * (1 + taxes);
    console.log(`${description} With Tax: $${total}`);
    console.log(`%c${description} With Tax:%c $${total}`,"font-weight:bold;color:red","color:green");
};
calculatePrice(100, 0.07, "My item");
calculatePrice(100, 0, "My other item");
calculatePrice(100, undefined, "");
