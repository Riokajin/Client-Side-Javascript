const output = document.getElementById("output");

/* STEP 1a: Create a new object using a regular function */
function createNewCar(make, model, color){
    let obj = {};
<<<<<<< HEAD
    obj.make = make;
    obj.model = model;    
    obj.color = color;
    return obj;
}
/* STEP 1b: Use the console to create a new vehicle object, and then invoke the function represented using .description() */
let car1 = createNewCar("Hyundai", "Elantra", "Grey")
=======
    obj.model = model;
    obj.make = make;
    obj.color = color;
    return obj;
}

/* STEP 1b: Use the console to create a new vehicle object, and then invoke the function represented using .description() */
let car1 = createNewCar("Honda", "Civic", "White");

>>>>>>> 20e1d69c6675f8590c5c1215d1d73e5203f602dd
/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Car(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;
    this.description = function(){
<<<<<<< HEAD
        return `This ${this.color} ${this.make} ${this.model} is a piece of shite`;
    }
=======
        return `A ${this.make} ${this.model} with ${this.color} color.`;
    }
}
>>>>>>> 20e1d69c6675f8590c5c1215d1d73e5203f602dd

}
/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
<<<<<<< HEAD
let car2 = new Car("Honda", "CRV", "Black")
output.textContent = car2.description();
=======
let car2 = new Car("Honda", "CRV", "Black");
output.textContent = car2.description();

>>>>>>> 20e1d69c6675f8590c5c1215d1d73e5203f602dd
/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person2['age']
// person2.interests[1]
// person2.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car3 = new Object();
<<<<<<< HEAD
/* STEP 4b: Once 'car' is created, add various properties and methods… */
car3.make = "RAM";
car3.model = "1500";
car3.color = "Blue";
=======

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car3.make = "RAM";
car3.model = "1500";
car3.color ="Green";

>>>>>>> 20e1d69c6675f8590c5c1215d1d73e5203f602dd
/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let car4 = Object.create(car2);
<<<<<<< HEAD
car4.color = "Purple"
=======
car4.color = "Purple";

>>>>>>> 20e1d69c6675f8590c5c1215d1d73e5203f602dd
/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
