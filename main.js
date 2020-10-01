function removeEveryNth(array, nth, i = 0) {
	if (i < array.length) {
		if (i !== 0 && i % nth - 1 === 0) { // nth - 1 for human readable indexing 
			delete array[i]; // replaces with empty spaces but not reindex
		}
		return removeEveryNth(array, nth, ++i);
	}
	else {
		return array.filter(elem => { return elem !== null }); // delete all empty spaces and reindex
	}
}

let list = [ 0, 1, 2, 3, 4, 5, 6 ];
removeEveryNth(list, 2);