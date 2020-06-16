function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// takes in a given string, splits the string into individual strings by it's spaces, then a copy of the array of strings is
// created and those strings are reversed, then those strings' values are replaced with the lengths of those strings.