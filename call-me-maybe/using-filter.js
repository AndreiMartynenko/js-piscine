
/*
Create the following functions:
Your solutions must use filter.

filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.

filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).

filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).

filter1DistinctVowel: accepts an array of strings, and returns only those which contain distinct vowels (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".

multiFilter: accepts an array of objects, and returns only those which:

the key capital contains at least 8 characters.
the key name does not start with a vowel.
the key tag has at least one vowel.
the key region is not "South"

*/

// Returns an array of state names with less than 7 characters
function filterShortStateName(arr) {
    return arr.filter(state => state.length < 7);
  }
  
  // Returns an array of strings that start with any vowel
  function filterStartVowel(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return arr.filter(str => vowels.includes(str[0].toLowerCase()));
  }
  
  // Returns an array of strings that contain at least 5 vowels
  function filter5Vowels(arr) {
    const vowelsRegex = /[aeiou]/gi;
    return arr.filter(str => (str.match(vowelsRegex) || []).length >= 5);
  }
  
  // Returns an array of strings that contain only one distinct vowel
  function filter1DistinctVowel(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return arr.filter(str => {
      const distinctVowels = [...new Set(str.toLowerCase().match(/[aeiou]/g))];
      return distinctVowels.length === 1 && vowels.includes(distinctVowels[0]);
    });
  }
  
  // Returns an array of objects that satisfy the given conditions
  function multiFilter(arr) {
    return arr.filter(obj =>
      obj.capital.length >= 8 &&
      !['a', 'e', 'i', 'o', 'u'].includes(obj.name[0].toLowerCase()) &&
      obj.tag.match(/[aeiou]/i) &&
      obj.region !== 'South'
    );
  }
  
  /*

  This code defines five different functions that use the filter method to filter arrays based on specific conditions.

filterShortStateName: This function takes an array of strings (state names) and returns only the ones that have less than 7 characters. 
It achieves this by using the filter method and the arrow function syntax to test the length of each string against the condition.

filterStartVowel: This function takes an array of strings and returns only the ones that start with any vowel (a, e, i, o, or u). It first defines an array of vowels, 
then uses the filter method and another arrow function to check if the first character of each string is included in the vowels array. 
It also converts the first character to lowercase using the toLowerCase method to allow for case-insensitive matching.

filter5Vowels: This function takes an array of strings and returns only the ones that contain at least 5 vowels (a, e, i, o, or u). 
It first defines a regular expression that matches any vowel character (in any case) globally, 
and then uses the filter method and an arrow function to count the number of matches in each string using the match method. 
It also uses the || operator and an empty array to handle cases where the match method returns null (e.g., when there are no vowel characters in the string).

filter1DistinctVowel: This function takes an array of strings and returns only the ones that contain only one distinct vowel (a, e, i, o, or u). It first defines an array of vowels, 
and then uses the filter method and a more complex arrow function to find the distinct vowels in each string using the match method, the toLowerCase method, and the Set object. 
It then checks if the number of distinct vowels is equal to 1 and if the vowel is included in the vowels array.

multiFilter: This function takes an array of objects and returns only the ones that satisfy four specific conditions. 
It achieves this by using the filter method and an arrow function that tests each object against the conditions using logical operators (&& and !). 
The conditions are as follows: the capital key of the object must have a length of at least 8, the name key of the object must not start with any vowel, 
the tag key of the object must contain at least one vowel, and the region key of the object must not be "South".
  
  */
