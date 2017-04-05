var arrayTasks = {

	concat: function (arr1, arr2) {
		var resultingArray = [];
		arr1.forEach(function(element){
			resultingArray.push(element);
		})
		arr2.forEach(function(element){
			resultingArray.push(element);
		})
		return resultingArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;	
	},

	// square: function (arr) {
		
	// },

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
