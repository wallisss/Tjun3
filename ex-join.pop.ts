//https://www.youtube.com/watch?v=5kFOWBh5zKE&t=30s
let listItem:string[]=['0bag','1shoes','2dress','3socks','4pie','5lemon','6apple','7pear'];
let colors:string[]=['red','blue','green'];
listItem[3]='watch';
listItem[2]='ring';
console.log(listItem);
console.log(listItem[1]);
console.log(listItem.length);
console.log(listItem.concat(colors));//arr1+arr2
console.log(listItem.pop());//remove last (mod)
console.log(listItem);
console.log('push:'+listItem.push('last'));//add at end
console.log(listItem);
console.log(listItem.reverse());//reverse(mod)
console.log(listItem);
console.log("shift:"+listItem.shift());//remove first element(show and mod)
console.log(listItem);
console.log(listItem.unshift('uOne','unTwo'));//add at beggin and mod and show new array length
console.log(listItem);
console.log("slice:"+listItem.slice(1,4));//show from 0(in) to 4(excl) ;(-)from end
console.log(listItem);
console.log("slice:"+listItem.slice(1,-1));//
console.log("sort():"+listItem.sort());//mod
console.log(listItem);
console.log(listItem.toString());//show by comat
console.log(listItem);
console.log(listItem.join(' '+'sep'+' '));//show ak tostring +sep +' '
console.log(listItem.join(' + '));
console.log(listItem);
