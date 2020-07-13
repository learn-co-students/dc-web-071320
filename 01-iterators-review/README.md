.each
  - takes in a block
  - performs operations on block for each element of iterable (array, hash, etc)
  - *returns the original array*

.map / .collect
  - takes return value from each element passed into block and saves in a new array
  - return value will be same length as original


.find / .detect
  - will take in a _conditional_ in the block
  - returns first element where conditional is true

.select / .find_all