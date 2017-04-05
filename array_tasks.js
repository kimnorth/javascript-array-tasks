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

	square: function (arr) {
		var resultingArray = [];
		arr.forEach(function(element){
			resultingArray.push(element = element * element);
		})
		return resultingArray;
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach(function(element){
			total += element;
		})
		return total;
	},

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
