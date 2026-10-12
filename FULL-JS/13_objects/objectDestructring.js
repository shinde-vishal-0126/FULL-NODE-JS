/*
# object destructuring 
1.def: object destructuring is feature in js used to extract or unpack value from object and then assign from variable in a more concise and readable way 
2. i.e destructuring make it possible to unpack properties from the object in distinct variable.

*/
const myBio = {
  name: "vishal",
  age: 30,
  degree: "BE",
};

// # to get data in tradition way like
console.log(myBio.name);
console.log(myBio.degree);

// # by using destructuring
const { name, age, degree } = myBio;
console.log(name);
console.log(age);
console.log(degree);

// # how to destructure if you have nested object

const user = {
  username: "Vishal",
  address: {
    city: "Pune",
    location: {
      lat: 18.5204,
      lng: 73.8567,
    },
  },
  contact: {
    email: "vishal@example.com",
    phone: {
      home: "020-123456",
      mobile: "9876543210",
    },
  },
};

const {
  username,
  address: {
    city,
    location: { lat, lng },
  },
  contact: {
    phone: { mobile, home },
  },
} = user;
console.log(mobile);
console.log(home);

// # also if you give perticular object then you also give

const {
  contact: { phone },
} = user;
// You’re destructuring contact, but not creating a variable named contact.
// You're only extracting phone from contact.
// So, contact is not defined in the current scope.
// console.log(contact);
console.log(phone);

/*
 # now we can add dynamic properties or key
  (How to get dynamic data on object )

#  How to make object key dynamic in Given object ?
 To make dynamic key in object you have defined the key inside the square bracket show in below example 
 in below example we have to add the dynamic key as vishal : and it value is How are you  
*/
let name1 = "Greet";
let myData = {
  [name1]: "how are you",
  [20]: "this is my age",
};
console.log(myData);
