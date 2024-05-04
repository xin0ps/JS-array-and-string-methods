// Array Exercises


// butun methodlari arrayin extension methodu olaraq add edirem ve hamisini methodlar istifade etmeden primitiv backend ile yaziram 

// ---------------------------------------------------------------------
// 1 Write a function that takes an array and returns a new array with the last item removed. (pop)

Array.prototype.myPop = function() {
    if (this.length === 0) {
        return undefined; 
    }
    
    const poppedItem = this[this.length - 1]; 
    this.length--;
    
    return poppedItem; 
};

// const myArray=[1,2,3];
// myArray.myPop();

// console.log(myArray);

// ---------------------------------------------------------------------
// 2. Write a function that takes an array and returns the length of items it has.


Array.prototype.myLength = function() {
    let length=0;
    this.forEach(element => {
        length++;
    });
    return length;
};

// const myArray=[1,2,3,4];
// let i =myArray.myLength();

// console.log(i);

// ---------------------------------------------------------------------


// 3. Write a function that takes an array and an item, returns the array with the item added to the end of array.
 
Array.prototype.myPush = function(item) {
    
    this[this.myLength()]=item;


};

// const myArray=[1,2,3];
// myArray.myPush(4);

// console.log(myArray);


// ---------------------------------------------------------------------



// 4. Write a function that takes an array and an item, returns the array with the item added to the beginning of array.

Array.prototype.myUnShift = function(item) {
    let newArray = [item];
    
    this.forEach(element => {
        newArray.myPush(element);
    });
    
    for (let i = 0; i < newArray.length; i++) {
        this[i] = newArray[i];
    }


    return this;
};


// const myArray=[1,2,3];
// myArray.myUnShift(4);

// console.log(myArray);


// ---------------------------------------------------------------------


// 6. Write a function that takes an array of words and returns a string of the words seperated by ,

Array.prototype.myJoin = function() {
   
    let mystring="";
    
    
   for (let i = 0; i < this.length; i++) {
       if(i !== this.length - 1){
            mystring += this[i] + ",";
       } else {
            mystring += this[i];
       }
   }
    
    return mystring;
};

// const myArray=["hello","world","js","test"];
// const mystr=myArray.myJoin();

// console.log(mystr);

// ---------------------------------------------------------------------


// 7. Write a function that takes an array and two indexes (start and end). Return an array consisting of items between the given indexes.

Array.prototype.mySlices = function(x,y) {
   
 let newarr=[];

for (let i = x; i < y; i++) {
   newarr.myPush(this[i]);
    
}

for (let i = 0; i < newarr.length; i++) {
    this[i] = newarr[i];
}
this.length=newarr.myLength();

};

// const myArray=[1,2,3,4,5,6,7,8,9,10];
// myArray.mySlices(3,7)
// console.log(myArray);


// ---------------------------------------------------------------------

// 8. Write a function that takes an array and an index, returns the item at given index.

Array.prototype.myAt = function(index) {
   
   for (let i = 0; i < this.length; i++) {
    if(i===index){
        return this[i];
    }
   }
 
   };

//    const myArray=[1,2,3,4,5];
//     console.log(myArray.myAt(3));


// ---------------------------------------------------------------------


// Write a function that takes an array and an item, removes that item from the array without leaving undefined items, returns the new array.


Array.prototype.myDelete = function(item) {
let newarr=[];

    this.forEach(element => {
        if(element!==item){
        newarr.myPush(element);
        }
    });
  
    for (let i = 0; i < newarr.myLength(); i++) {
        this[i] = newarr[i];
    }

    this.length=newarr.myLength();
};

    // const myArray=[1,2,3,4,5];
    // myArray.myDelete(3)
    // console.log(myArray);









