//jshint esversion: 6

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

//Schemas
const fruitsSchema = new mongoose.Schema({
    name: {
        type: String
        // required: [true, "Cannot add without name"]
        
    },
    rating: Number,
    review: String
});

const peopleSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    favoriteFruit: fruitsSchema
});

//Models
const Fruit = mongoose.model("Fruit", fruitsSchema);

const Person = mongoose.model("Person", peopleSchema);

//New fruit documents
const apple = new Fruit({
   name: "Apple",
   rating: 7,
   review: "Pretty solid as a fruit." 
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "love it"
});

const orange = new Fruit({
    name: "Orange",
    rating: 10,
    review: "love it"
});

const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "love it"
});


const peach = new Fruit({
    rating: 10,
    review: "I love peaches!"
});


//New Person documents

const amy = new Person({
    name: "Amy",
    age: 18,
    favoriteFruit: banana
});

const john = new Person({
    name: "John",
    age: 37,
});

//Find Operation
Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    
    else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
        
    }
    
});

//Update Operation
Fruit.updateOne({_id: "5f24dfc90f64b0434c2fb54d"}, {name: "Peach"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated the document.");
    }
});

Person.updateOne({name: "John"}, {favoriteFruit: peach}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated John's favorite fruit.");
    }});


//Delete Operation
Person.deleteOne({rating: 7}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted");
    }
});


//Finally, close connection
mongoose.connection.close();
