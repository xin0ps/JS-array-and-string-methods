// Exercise 1: String Length 
// Write a function that takes a string and returns its length.

String.prototype.myLength = function() {
    
    return this.length
       
    };
    
// const myStr="hello";
// console.log(myStr.myLength());


// Exercise 2: Character at Index 
// Write a function that takes a string and an index. Return the character at that index.

String.prototype.myAt = function(index) {
    
    return this[index];
       
    };

// Exercise 3: Extract Substring 
// Write a function that takes a string and two indices (start and end). Return the substring between the given indices.

String.prototype.mySlice = function(index1,index2) {
    


    let str="";

    for (let i = index1; i < index2; i++) {
       str+=this[i];
        
    }
    
  return str;

    };

    // const str= "hello";

    // console.log(str.mySlice(1,3) )


       
    

// Exercise 4: Split and Count Words 
// Write a function that takes a sentence and returns the number of words in the sentence.



String.prototype.mySplit = function() {
    
let count = 1;

for (let index = 0; index < this.length; index++) {
    if(this[index]===" "){
        count++
    }
    
}
  
    
  return count;

    };

    // const str= "hello world from js";
    // console.log(str.mySplit());



// Exercise 5: Search and Replace 
// Write a function that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase.




String.prototype.myReplace = function(search, replace) {
    let result = this; 


    let index = result.indexOf(search);
    while (index !== -1) {
        result = result.slice(0, index) + replace + result.slice(index + search.length);
        index = result.indexOf(search, index + replace.length); 
    }

    return result;
};


// const sentence = "hello world";
// const replacedSentence = sentence.myReplace("world", "step");
// console.log(replacedSentence);


// Exercise 6: Find Index of Character 
// Write a function that takes a string and a character and returns the index of the first occurrence of that character in the string.

String.prototype.myIndexof = function(character) {
  
    for (let index = 0; index < this.length; index++) {
       if(this[index]===character){
        return index;
       }
        
    }
return -1;

};

// const str = "hello world";
// console.log(str.myIndexof("o"));



// Exercise 7: Reverse a String 
// Write a function that reverses and returns a given string.

String.prototype.myReverse = function() {
  
let str="";

for (let index = this.length-1; index >=0; --index) {
  str+=this[index];
}

return str;
};

// const str = "hello world";
// console.log(str.myReverse());



// Exercise 8: Remove Whitespace 
// Write a function that takes a sentence with extra whitespace, removes the extra spaces and returns the sentence.

String.prototype.myremoveExtraWhitespace = function() {
    let result = "";
    let isWhitespace = false; 

    for (let i = 0; i < this.length; i++) {
        if (this[i] === " ") {
      
            if (!isWhitespace) {
          
                result += this[i];
                isWhitespace = true;
            }
        } else {
            result += this[i];
            isWhitespace = false;
        }
    }

    return result;
};

// const sentence = "Hello     world    from   js";
// const cleanedSentence = sentence.myremoveExtraWhitespace();
// console.log(cleanedSentence);




// Exercise 9: Concat
// Write a function that concatenates two given strings and returns the resulting string.

String.prototype.myConcat = function(str2) {
    let result = this;

    for (let index = 0; index < str2.length; index++) {
        result += str2[index]; 
    }

    return result; 
};

let str1 = "hello ";
let str2 = "world ";

console.log(str1.myConcat(str2)); 





// Exercise 10: Uppercase Conversion 
// Write a function that takes a sentence and converts the first letter of each word to uppercase.


String.prototype.myCapitalize=function() {
    const words = this.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            result += " ";
        }
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return result;
}

// const sentence = "hello world from js";

// console.log(sentence.myCapitalize());