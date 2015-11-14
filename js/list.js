// Clase LIST - cuando cree objetos list van a ser de esta class
var List = function () {
	// le doy la propiedad items q va a ser un array
	this.items = [];
	// le doy la propiedad/funcion add - agrega con el push
	this.add = function (theItem) {
		this.items.push(theItem);
		return true;
	};
	//le doy la propiedad/funcion remove. Toma el index de items de la lista y
	//le quita un elemento a la propiedad items de este objeto.
	this.remove = function (theItem) {
		var index = this.getIndexByItem(theItem);
		this.items.splice(index, 1);
		return true;
	};

	//propiedad / funcion de las listas para tomar un item por su id
	this.getItemById = function (id) {
		for (var i = 0; i < this.items.length; i++) {
			var item = this.items[i];

			if (item.id == id) {
				return item;
			}

		}
	};
	//propiedad / funcion de las listas para buscar la posicion de un objeto item
	this.getIndexByItem = function (itemToSearch) {
		for (var i = 0; i < this.items.length; i++) {
			var tmpItem = this.items[i];

			if (itemToSearch.id == tmpItem.id) {
				return i;
			}

		}
	}
};
