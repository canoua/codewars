// These dots at the end also add to the string length.
// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, 
// then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, 
// then the length of the dots is not added to the string length.
// e.g. trim("He", 1) should return "H...", because 1 <= 3

function trim(str, size) {
  str = str.slice(0,size);
  console.log(`${str}...`);
}

trim("Code Wars is pretty rad", 50)