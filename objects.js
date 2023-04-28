// / Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  const personabove18 = arr => {
      const firstArr = []
      arr.forEach(item => {
          if(item.age >= 18)
           firstArr.push(item.name)
      });
      return firstArr
  }
  console.log(personabove18(people))
  // Write a function that takes an array of objects, where each object represents a product
  //  with a name, price, and category property.
  // The function should return an object that groups the products by their categories,
  // with the category names as keys and the arrays of products as values.
  function category(products) {
    const x = {};
    for (const product of products) {
      if (!x[product.category]) {
        x[product.category] = [];
      }
      x[product.category].push(product);
    }
    return x;
  }
  const products = [
    { name: 'pencil', price: 120, category: 'Stationery' },
    { name: 'pen', price: 250, 'categor':'stationery'},
    { name: 'book', price: 100, category: 'stationery' },
    { name: 'trousers', price: 600, category: 'Clothing' },
  ];
  const groupedProducts = category(products);
  console.log(groupedProducts);
  // Given an array of objects, where each object represents a student with a name and an array of scores,
  // write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
  // const students = [
  //     { name: 'John', scores: [90, 80, 85] },
  //     { name: 'Jane', scores: [95, 92, 88] },
  //     { name: 'Jim', scores: [70, 80, 75] },
  //     { name: 'Jill', scores: [85, 90, 84] },
  // ];
    function highStudents(students) {
      const y = [];
      for (const student of students) {
        const scores = student.scores;
        const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        if (averageScore >= 85) {
          y.push(student.name);
        }
      }
      return y;
    }
    const students = [
      { name: 'John', scores: [90, 80, 85] },
      { name: 'Jane', scores: [95, 92, 88] },
      { name: 'Jim', scores: [70, 80, 75] },
      { name: 'Jill', scores: [85, 90, 84] },
  ];
  const higherPerformers = highStudents(students);
  console.log(higherPerformers);
    // Given an object representing a car, with properties for the make, model, year, and a method to
  // display the car's information,
  // write a function that takes the car object and adds a new method to the object called age.
  // The age method should return the current age of the car based on the current year and the car's year property.
  // const car = {
  //     make: 'Ford',
  //     model: 'Ranger',
  //   year: 2023,
  //   displayInfo: function() {
  //       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  //   },
  // };
  function addAgeMethod(car) {
    const thisYear = new Date().getFullYear();
    const caryear = car.year;
    car.age = function() {
      return thisYear - caryear;
    };
  }
  const car = {
    make: 'Ford',
    model: 'Ranger',
   year: 2023,
   displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
  };
  addAgeMethod(car);
  console.log(car.age());
