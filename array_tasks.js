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

	findDuplicates: function (arr) {
		var strippedArray = [];
		var duplicateArray = [];
		arr.forEach(function(element){
			if (strippedArray.includes(element)){
				if (!duplicateArray.includes(element)){
					duplicateArray.push(element);	
				}
			}
			else {
				strippedArray.push(element);
			}
		})
		return duplicateArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var resultingArray = [];
		arr.forEach(function(element){
			if (element != valueToRemove){
				resultingArray.push(element);
			}
		})
		return resultingArray;		
	},

	findIndexesOf: function (arr, itemToFind) {
		var resultingArray = [];
		for (i = 0; i < arr.length; i++){
			if (arr[i] == itemToFind){
				resultingArray.push(i);
			}
		}
		return resultingArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var result = 0;
		arr.forEach(function(element){
			if (element % 2 == 0){
				result += (element * element)
			}
		})
		return result;
	}

}

module.exports = arrayTasks
