function add(a: number, b: number): number {
  return a + b;
}

let result = add(parseInt("1"), 2); // Corrected: Parses the string to a number before addition.

//Alternative solution using type assertion (less safe):
// let result = add(Number("1"), 2); 
//Note: Type assertion can hide potential runtime errors if the string cannot be parsed to a number.