function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error("[]");
  }

  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1
    };
  });
}


const names = ["John", "Peter", "Bernard","Sam"];
const modifiedNames = ["JOHN", "peter", "BERNARD", "sam"]; 
const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
