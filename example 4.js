function readyToPutInTheDOM(arr) {
    return arr.map(function(obj) {
      //return "<h1>" +obj.name +"</h1>" + "<h2>" + obj.age +"</h2>";
      return `<h1>${obj.name}</h1><h2>${obj.age}</h2>`;
    });
  }
  console.log(
    readyToPutInTheDOM([
      {
        name: "Angelina Jolie",
        age: 80,
      },
      {
        name: "Eric Jones",
        age: 2,
      },
      {
        name: "Paris Hilton",
        age: 5,
      },
      {
        name: "Kayne West",
        age: 16,
      },
      {
        name: "Bob Ziroll",
        age: 100,
      },
    ])
  );