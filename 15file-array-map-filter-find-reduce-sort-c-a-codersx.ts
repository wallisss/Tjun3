Skip to content
 
Search…
All gists
Back to GitHub
@wallisss 
@chitao5799
chitao5799/array map-filter-find-reduce-sort của CodersX
Created 16 months ago • Report abuse
2
3
 Code
 Revisions 1
 Stars 2
 Forks 3
<script src="https://gist.github.com/chitao5799/c3d1922d1330b2a5d5d08e8f5da7f1b2.js"></script>
array map-filter-find-reduce-sort của CodersX
/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function tripple(num) {
  // Write code here...
  return num*3;
}

function multiply(numbers) {
  // Write code here...
  return numbers.map(x=>tripple(x));
}
// Use array map make an array of strings of the names
//namesOnly(users)
//["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
var users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]

function namesOnly(arr) {
  // Write code here...
  return arr.map(x=>x.name);
}
// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
    
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
    
  }
]

function readyToPutInTheDOM(arr) {
  // Write code here...
 return arr.map(function(obj) {
    return "<h1>" +obj.name +"</h1>" + "<h2>" + obj.age +"</h2>";
  });
}
//readyToPutInTheDOM(users)
/**["<h1>Angelina Jolie</h1><h2>80</h2>", 
"<h1>Eric Jones</h1><h2>2</h2>", "<h1>Paris Hilton</h1><h2>5</h2>", 
"<h1>Kayne West</h1><h2>16</h2>", "<h1>Bob Ziroll</h1><h2>100</h2>"]*/
///----------filter
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  // your code here
  return arr.filter(x=>x>=5);
}
//fiveAndGreaterOnly([3, 6, 8, 2]) //[6, 8]
//---
// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  // your code here!
  return arr.filter(x=>x%2==0);
}
//evensOnly([3, 6, 8, 2])-[6, 8, 2]
//---
/**
 * Give a list of students, filter out non-female 
 */
 
 var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
function filterOutFemales(members) {
  // your code here!
  return members.filter(x=>x.gender!='female');
}
//filterOutFemales(members)
//[ { name: 'Trung', gender: 'male' }, { name: 'Peter', gender: 'gay' } ]
----======find
// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  // your code here
  return array.find(x=>x%2==0);
}
//findFirstEvenNumber([11, 13, 25, 29, 40]) //40
//findFirstEvenNumber([33, 23, 17]) //undefined
------
/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
  // viết code ở đây.
  return array.find(y=>y%x==0);
}
//findDivisibleNum([1, 3, 4], 2) //4
=======reduce
// Turn an array of voter objects into a count of how many people voted

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
  // write code here...
  return arr.filter(x=>x.voted==true).length;
}
//totalVotes(voters) //7// Turn an array of voter objects into a count of how many people voted

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
  // write code here...
  return arr.filter(x=>x.voted==true).length;
}
//totalVotes(voters) //7
--------
// Given an array of all your wishlist items,
//figure out how much it would cost to just buy everything at once

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishlist) {
  // Write code here...
  return wishlist.map(x=>x.price).reduce((a,b)=>a+b);
}
//shoppingSpree(wishlist)//227005
-----
// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function arrayTitle(wishlist) {
  // Write code here...
  return wishlist.map(x=>x.title);
}
//arrayTitle(wishlist)
//[ 'Tesla Model S', '4 carat diamond ring', 'Fancy hacky Sack', 'Gold fidgit spinner', 
//'A second Tesla Model S' ]
=====úng dụng 
/* Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/

var listProducts = [
 {id: 1, categoryId: 1, name: 'Tivi'},
 {id: 2, categoryId: 1, name: 'Tủ lạnh'},
 {id: 3, categoryId: 3, name: 'Ghế sofa'},
 {id: 4, categoryId: 1, name: 'Máy giặt'},
 {id: 5, categoryId: 2, name: 'Chén bát'},
 {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
 {id: 7, categoryId: 3, name: 'Cửa kính'},
 {id: 8, categoryId: 1, name: 'Điều hoà'},
 {id: 9, categoryId: 3, name: 'Bàn tròn'},
 {id: 10, categoryId: 2, name: 'Lò vi sóng'},
]

function filterProductsByCategoryId(products, categoryId) {
  // your code here! 
  return products.filter(x=>x.categoryId===categoryId);
}
-----
/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

function removeDuplicate(array) {
  var newArr=[];
 return array.filter(function(x){
     if(newArr.indexOf(x)==-1)
      { 
        newArr.push(x);
        return true;
      }
    return false;
 });
}
======reduce phần 2
// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  // viết code ở đây.
 return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
----------
/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce((newObject, key) => {
   if (newObject[key]) 
      key = newObject[key]++;
   else newObject[key] = 1;
   return newObject
 },{});
}

======sort
// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
  // Write code here...
 return arr.sort((a,b)=>a-b);
}
------
//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
 
  // Write code here...
  return arr.sort((a,b)=>b-a);
}
------------
// Sort an array from shortest string to longest

function lengthSort(arr) {
  // Write code here...
  return arr.sort((a,b)=>{ 
     return a.length-b.length;
  });
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length
-----------
// Sort an array alphabetically

function alphabetical(arr) {
  // Write code here...
  return arr.sort((a,b)=>{ 
      for (var i=0;;i++)
      {
          if(!a.charCodeAt(i).isNaN)
          {
              if(!b.charCodeAt(i).isNaN)
              {
                  if(a.charCodeAt(i)-b.charCodeAt(i)==0)
                    continue;
                  return a.charCodeAt(i)-b.charCodeAt(i);
              }
              else break;
          }
          else break;
      }
  });
}
//alphabetical(["cat", "dog", "bird", "fish", "buffalo", "rabbit", "mouse", "turtle"])
//
//[ 'bird', 'buffalo', 'cat', 'dog', 'fish', 'mouse', 'rabbit', 'turtle' ]
-------------
// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]

function byAge(arr){
  // Write code here...
  return arr.sort((a,b)=>{ 
     return a.age-b.age; 
  });
}
//byAge(arr)
//
//[{ name: 'Misunderstood Observer', age: 2 }, { name: 'Quiet Samurai', age: 22 }, 
//{ name: 'Unlucky Swami', age: 77 }, { name: 'Arrogant Ambassador', age: 100 }]
-------------
/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents(students) {
  // Write code here...
  var kq=students.sort((a,b)=>{ 
     return b.score-a.score; 
  }).slice(0,3);
  return kq.reduce((a,b)=>{
      return a.concat(b.name);
  },[]);
}
//getTopStudents(students) //["C", "A", "E"]

@Thinh961
Thinh961 commented on Jul 6, 2020
function flatten(arr) {
// viết code ở đây.
return arr.reduce(function (flat, toFlatten) {
return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
}, []);
}
bạn có thể giải thích giúp mình bài này ko ạ.

@chitao5799
Owner
Author
chitao5799 commented on Jul 6, 2020 • 
function flatten(arr) {
// viết code ở đây.
return arr.reduce(function (flat, toFlatten) {
return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
}, []);
}
giải thích :

hàm flatten nhận vào 1 array, hàm trả về 1 giá trị (vì arr.reduce trả về 1 giá trị).
hàm reduce ở bài này truyền 2 tham số: flat là biến tích lũy giá trị trả về, giá trị khởi tạo là [ ] (mảng rỗng). toFlatten là phần tử hiện tại đang được xủa lý của mảng arr.
Trong hàm reduce sẽ có giá trị trả về, giá trị trả về này sẽ được gán vào biến tích lũy trong mỗi lần xử lý.
Giá trị trả về trong hàm reduce là gọi hàm concat (hàm này trả về kết quả nối 2 hay nhiều mảng lại với nhau và ko làm thay đổi mảng ban đầu).
" Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten " là toán tử 3 ngôi, nếu toFlatten là 1 array thì gọi lại hàm flatten (đệ quy), còn không thì trả về toFlatten - mảng flat sẽ nối thêm phần tử toFlatten . Tức là mỗi lần xử lý 1 phần tử trong mảng arr trong hàm reduce khi phần tử đó không phải là một mảng thì thì sẽ nối phần tử đó vào giá trị tích lũy (flat) và sẽ gán flat = với kết quả vừa nối.

@Thinh961
Thinh961 commented on Jul 6, 2020
function flatten(arr) {
// viết code ở đây.
return arr.reduce(function (flat, toFlatten) {
return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
}, []);
}
giải thích :

hàm flatten nhận vào 1 array, hàm trả về 1 giá trị (vì arr.reduce trả về 1 giá trị).
hàm reduce ở bài này truyền 2 tham số: flat là biến tích lũy giá trị trả về, giá trị khởi tạo là [ ] (mảng rỗng). toFlatten là phần tử hiện tại đang được xủa lý của mảng arr.
Trong hàm reduce sẽ có giá trị trả về, giá trị trả về này sẽ được gán vào biến tích lũy trong mỗi lần xử lý.
Giá trị trả về trong hàm reduce là gọi hàm concat (hàm này trả về kết quả nối 2 hay nhiều mảng lại với nhau và ko làm thay đổi mảng ban đầu).
" Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten " là toán tử 3 ngôi, nếu toFlatten là 1 array thì gọi lại hàm flatten (đệ quy), còn không thì trả về toFlatten - mảng flat sẽ nối thêm phần tử toFlatten . Tức là mỗi lần xử lý 1 phần tử trong mảng arr trong hàm reduce khi phần tử đó không phải là một mảng thì thì sẽ nối phần tử đó vào giá trị tích lũy (flat) và sẽ gán flat = với kết quả vừa nối.

Cảm ơn b ạ...

@Farthen-Dur
Farthen-Dur commented on Jul 24, 2020
function removeDuplicate(array) {
var newArr=[];
return array.filter(function(x){
if(newArr.indexOf(x)==-1)
{
newArr.push(x);
return true;
}
return false;
});
}

Cho em hỏi em mới học Javasripts nên vẫn chưa rõ lắm. cái return true; return false là của function hay của if vậy ạ? Em cứ nghĩ khi nào xác định ở trên function là boolean mới return true false ấy ạ.. Và khi return thì kiểu nó sẽ xuất kq true,false chứ chưa hình dung được cách điều hướng true,false để chạy hàm hay dừng lại như này. Có thể giải thích hay cho em xem tham khảo tài liệu gì được không ạ?

@chitao5799
Owner
Author
chitao5799 commented on Jul 25, 2020
function removeDuplicate(array) {
   var newArr=[];
   return array.filter(function(x){
             if(newArr.indexOf(x)==-1)
            { 
                    newArr.push(x);
                    return true;
            }
            return false;
     });
}
Cho em hỏi . cái return true; return false là của function hay của if vậy ạ?

hàm removeDuplicate nhận vào 1 tham số là 1 mảng "array"
cái mảng "array" gọi phương thức filter. cái phương thức filter này truyền vào 1 tham số là 1 hàm callback và filter trả về 1 mảng mới. callback nhận 3 tham số, nhưng ở đây callback chỉ truyền 1 tham số là từng phần tử trong mảng "array". callback này cần trả về giá trị boolean. Nếu trả về true thì phần tử đang xét của mảng "array" sẽ thêm vào mảng mới được trả về của hàm filter. xem thêm về filter:

Ví dụ chạy bằng tay: removeDuplicate([1, 1, 2, 3, 3]);//kết quả: [ 1, 2, 3 ]
Giả sử mảng mới trả về của hàm filter đặt là "kkk"
+) xét phần tử thứ 1 = 1 (1 là x)
newArr.indexOf(x) thì newArr ko có phần tử nào có giá trị là 1 nên hàm indexOf trả về -1, điều kiện if đúng thì chạy khối lệnh if,=> newArr=[1] và kkk=[1]
+) xét phần tử thứ 2 = 1 (1 là x)
newArr.indexOf(x) thì newArr đã có phần tử có giá trị là 1 nên hàm indexOf trả về 0, điều kiện if sai thì chạy các lệnh sau if,=> newArr=[1] và kkk=[1]
+) xét phần tử thứ 3 = 2 (2 là x)
newArr.indexOf(x) thì newArr ko có phần tử nào có giá trị là 2 nên hàm indexOf trả về -1, điều kiện if đúng thì chạy khối lệnh if,=> newArr=[1,2] và kkk=[1,2]
+) xét phần tử thứ 4 = 3 (3 là x)
newArr.indexOf(x) thì newArr ko có phần tử nào có giá trị là 3 nên hàm indexOf trả về -1, điều kiện if đúng thì chạy khối lệnh if,=> newArr=[1,2,3] và kkk=[1,2,3]
+) xét phần tử thứ 5 = 3 (3 là x)
newArr.indexOf(x) thì newArr đã có phần tử có giá trị là 3 nên hàm indexOf trả về 2, điều kiện if sai thì chạy các lệnh sau if,=> newArr=[1,2,3] và kkk=[1,2,3]
Thế là chạy song hàm filter, kết quả hàm filter trả về là mảng kkk=[1,2,3], mà hàm removeDuplicate thì trả về giá trị của lệnh return (lệnh return ở dòng thứ 3) nên hàm removeDuplicate trả về [1,2,3]

@Farthen-Dur
Farthen-Dur commented on Aug 10, 2020
function removeDuplicate(array) {
   var newArr=[];
   return array.filter(function(x){
             if(newArr.indexOf(x)==-1)
            { 
                    newArr.push(x);
                    return true;
            }
            return false;
     });
}
Cho em hỏi . cái return true; return false là của function hay của if vậy ạ?

hàm removeDuplicate nhận vào 1 tham số là 1 mảng "array"
cái mảng "array" gọi phương thức filter. cái phương thức filter này truyền vào 1 tham số là 1 hàm callback và filter trả về 1 mảng mới. callback nhận 3 tham số, nhưng ở đây callback chỉ truyền 1 tham số là từng phần tử trong mảng "array". callback này cần trả về giá trị boolean. Nếu trả về true thì phần tử đang xét của mảng "array" sẽ thêm vào mảng mới được trả về của hàm filter. xem thêm về filter:

Ví dụ chạy bằng tay: removeDuplicate([1, 1, 2, 3, 3]);//kết quả: [ 1, 2, 3 ]
Giả sử mảng mới trả về của hàm filter đặt là "kkk"
+) xét phần tử thứ 1 = 1 (1 là x)
newArr.indexOf(x) thì newArr ko có phần tử nào có giá trị là 1 nên hàm indexOf trả về -1, điều kiện if đúng thì chạy khối lệnh if,=> newArr=[1] và kkk=[1]
+) xét phần tử thứ 2 = 1 (1 là x)
newArr.indexOf(x) thì newArr đã có phần tử có giá trị là 1 nên hàm indexOf trả về 0, điều kiện if sai thì chạy các lệnh sau if,=> newArr=[1] và kkk=[1]
+) xét phần tử thứ 3 = 2 (2 là x)
newArr.indexOf(x) thì newArr ko có phần tử nào có giá trị là 2 nên hàm indexOf trả về -1, điều kiện if đúng thì chạy khối lệnh if,=> newArr=[1,2] và kkk=[1,2]
+) xét phần tử thứ 4 = 3 (3 là x)
newArr.indexOf(x) thì newArr ko có phần tử nào có giá trị là 3 nên hàm indexOf trả về -1, điều kiện if đúng thì chạy khối lệnh if,=> newArr=[1,2,3] và kkk=[1,2,3]
+) xét phần tử thứ 5 = 3 (3 là x)
newArr.indexOf(x) thì newArr đã có phần tử có giá trị là 3 nên hàm indexOf trả về 2, điều kiện if sai thì chạy các lệnh sau if,=> newArr=[1,2,3] và kkk=[1,2,3]
Thế là chạy song hàm filter, kết quả hàm filter trả về là mảng kkk=[1,2,3], mà hàm removeDuplicate thì trả về giá trị của lệnh return (lệnh return ở dòng thứ 3) nên hàm removeDuplicate trả về [1,2,3]

Dạ em cảm ơn ạ. Do em không tìm hiểu kĩ hàm filter nên hỏi hơi ngu ạ. Em cứ nghĩ nó trả về giá trị chứ không biết nó trả về true or false

@chitao5799
Owner
Author
chitao5799 commented on Aug 12, 2020
function flatten(arr) {
// viết code ở đây.
return arr.reduce(function (flat, toFlatten) {
return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
}, []);
}

giải thích hộ e cái này với ạ

cái này mình giải thích ở comment trên rồi mà.

@wallisss
 
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
