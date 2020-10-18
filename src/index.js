
// You should implement your task here.

module.exports = function towelSort (matrix=0) {
  for(let i=1; i< matrix.length; i+=2) {
    matrix[i].sort((a,b)=> b-a);
  }
  let newArr = [];
  for(let i=0; i< matrix.length; i++){
  	for (let n=0; n < (matrix[i]).length; n++){
    newArr.push(matrix[i][n]);
    }
  }
	  return matrix=0? '':newArr;
}
