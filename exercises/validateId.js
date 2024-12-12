// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
  // Check that the id exists
  if (id === null || id === undefined) {
    throw new Error('ID is required')
  }

  // The id should be a string:
  if (typeof id !== 'string') {
    throw new Error (`ID isn't a string`)
    // TODO: Add your code to throw an error here
  }

  if (id.length % 2 === 0) {
    throw new Error (`ID isn't an odd number of caracter long`)
  }
  // The id should be an odd number of characters long:
  // TODO: throw an error on this condition
  if (!id.includes('a')){

    throw new Error (`ID does not contain the letter a`)
  }
  // The id should contain the letter 'a':
  // TODO: throw an error on this condition
  if (id !== id.toLowerCase()){

    throw new Error (`ID is not all lower case`);
  }
  

    return  true; 
  }
  // The id should be all lowercase:
  // TODO: throw an error on this condition


// Exercise 2 Part 2
// Use try/catch with the `validateId` function above to validate the id.
// Return `true` if the id is valid.
// If an error is thrown: catch it, log a useful message, then return `false`

export function isIdValid(id, logger) {

  try {
    validateId(id);
    return true ;

  } catch (error) {
    logger.error ( `id's are invalid : ${error.message}`)
    return false
  }

}