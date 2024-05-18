# js-for-react-native-11253585

# Project Title: Array Processing and User Profiles

## Description

This project demonstrates three functions that manipulate arrays in different ways:

1. **`processArray`**: Processes an array of numbers by squaring even numbers and cubing odd numbers.
2. **`formatArrayStrings`**: Formats strings in an array based on the corresponding number in another array.
3. **`createUserProfiles`**: Creates user profile objects from two arrays of names.

## Functions


### 1. `processArray(num)`

This function takes an array of numbers and returns a new array where:
- Each even number is squared.
- Each odd number is cubed.

**Parameters:**
- `num`: An array of numbers.

**Returns:**
- A new array with processed numbers.

**Example:**
```javascript
const arr = [3, 4, 5, 6];
const newArray = processArray(arr);
console.log(newArray); // Output: [27, 16, 125, 36]
```

### 2. `formatArrayStrings(arrStrings, arr)`

This function formats strings in an array based on the corresponding number in another array:
- Converts the string to uppercase if the corresponding number is even.
- Converts the string to lowercase if the corresponding number is odd.

**Parameters:**
- `arrStrings`: An array of strings.
- `arr`: An array of numbers.

**Returns:**
- A new array with formatted strings.

**Example:**
```javascript
const arrStrings = ["have", "a", "nice", "day"];
const arr = [3, 4, 5, 6];
console.log(formatArrayStrings(arrStrings, arr)); // Output: ["have", "A", "nice", "DAY"]
```

### 3. `createUserProfiles(names, modifiedNames)`

This function creates an array of user profile objects, each containing the original name, the modified name, and a unique ID.

**Parameters:**
- `names`: An array of original names.
- `modifiedNames`: An array of modified names corresponding to the original names.

**Returns:**
- An array of user profile objects.

**Example:**
```javascript
const names = ["John", "Peter", "Bernard", "Sam"];
const modifiedNames = ["JOHN", "peter", "BERNARD", "sam"];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
// Output: 
// [
//   { originalName: "John", modifiedName: "JOHN", id: 1 },
//   { originalName: "Peter", modifiedName: "peter", id: 2 },
//   { originalName: "Bernard", modifiedName: "BERNARD", id: 3 },
//   { originalName: "Sam", modifiedName: "sam", id: 4 }
// ]
```

## Usage

To use these functions, include them in your JavaScript code and call them with the appropriate arguments as demonstrated in the examples above.





