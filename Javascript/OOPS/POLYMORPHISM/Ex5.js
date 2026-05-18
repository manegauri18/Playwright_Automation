//Example with Fixed + Rest Parameters


function showDetails(name, ...marks) {
  console.log("Name:", name);
  console.log("Marks:", marks);
}

showDetails("Gauri", 85, 90, 78);

//Output
// Name: Gauri
// Marks: [85, 90, 78]