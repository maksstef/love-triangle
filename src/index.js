/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  // your implementation
      let trianglesCount = 0;

   preferences.forEach(function(item, index, array) {
       let thirdLoversLove = array[array[item-1]-1]-1;
       if (index===thirdLoversLove) {
           trianglesCount++;
       }
   });

   return Math.trunc(trianglesCount/3);
};
