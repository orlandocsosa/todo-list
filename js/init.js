//Objeto global MyApp
var MyApp = {
	//Propiedad de MyApp que contiene un objeto de tipo List
	todo : new List(),

	//Funcion que le agrega un handler al elemento de HTML con ID add.
	init : function () {
		//Busca el elemento con id add en el HTML
		var $add = document.getElementById("add");
		//Define que va a pasar cuando le hagamos click a ese elemento
		$add.onclick = function () {
			//Cuando le hagamos click, vamos a ejecutar la funcion add
			//del objeto MyApp
			MyApp.add();
		};
	},

	//Agrega un item a MyApp.todo y en el HTML
	add : function () {
		//asigno el prompt a la variable newItemName
		var newItemName = prompt("enter your task");
		/* si la nueva variable no es null */
		if (newItemName != null) {

			//creo un nuevo item, y lo asigno a la variable newItem
			var newItem = new Item(newItemName);

			//Agregar el Item newItem a la List MyApp.todo
			MyApp.todo.add(newItem);
			//paso el item newItem como parametro de la funcion render del obj MyApp
			MyApp.render(newItem);
		}

	},
	// funcion update , toma el item por su id, pregunta nuevo nombre y le asigna
	//uno nuevo llamando a la funcion updateName
	update : function ($a) {
		var id = $a.getAttribute("data-item-id");
		var item = MyApp.todo.getItemById(id);

		var newItemName = prompt("enter your task");

		if (newItemName != null) {
			item.name = newItemName;
			MyApp.updateName(item);
		}

		console.log($a);
		console.log($a.getAttribute("data-item-id"));
	},

	remove : function ($element) {
		var id = $element.getAttribute("data-item-id");
		var item = MyApp.todo.getItemById(id);

		var borrar = confirm("do you want to delete the item?");
		if (borrar == true) {
			//Modelo
			MyApp.todo.remove(item);
			//Vista
			var $li = $element.parentNode;
			$li.parentNode.removeChild($li);
		}
	},

	render : function (item) {

		var $li = document.createElement('li');
		var $input = document.createElement('input');
		$input.setAttribute('type', 'checkbox');
		$input.setAttribute('data-item-id', item.id);
		$input.onclick = function () {

			var id = this.getAttribute('data-item-id');
			var item = MyApp.todo.getItemById(id);

			if (this.checked == true) {
				MyApp.complete(item);
			} else {
				MyApp.uncomplete(item);
			}
		};

		var $span = document.createElement('span');
		$span.setAttribute("id", "item-" + item.id)

		//Poner el nombre del item
		$span.innerHTML = item.name;

		var $aModificar = document.createElement('a');
		$aModificar.setAttribute("href", "#");
		$aModificar.innerHTML = "modificar";
		$aModificar.setAttribute("data-item-id", item.id);
		$aModificar.onclick = function () {

			MyApp.update(this);

		};

		var $aBorrar = document.createElement('a');
		$aBorrar.innerHTML = "borrar";
		$aBorrar.href = "#";
		$aBorrar.setAttribute("data-item-id", item.id);
		$aBorrar.onclick = function () {
			MyApp.remove(this);
		};

		$li.appendChild($input);
		$li.appendChild($span);
		$li.appendChild($aModificar);
		$li.appendChild($aBorrar);

		//Se lo agregues al UL id="todo-list"
		document.getElementById('todo-list').appendChild($li);
	},
	//updatea el html creado
	updateName : function (theItem) {

		var id = "item-" + theItem.id;
		var $span = document.getElementById(id);
		$span.innerHTML = theItem.name;

	},

	complete : function (item) {
		item.check = true;
		//Tenes que traer el SPAN con un document.getElementById()
		//crear clase y asignar elemento css cambiar color al span cuando true.
		var id = "item-" + item.id;
		var $span = document.getElementById(id);
		$span.setAttribute('class', 'items');

	},
	uncomplete : function (item) {
		item.check = false;
		//Tenes que traer el SPAN con un document.getElementById()
		//crear clase y asignar elemento css cambiar color al span cuando true.
		var id = "item-" + item.id;
		var $span = document.getElementById(id);
		$span.removeAttribute('class');
		console.log('la concha bien puta de su madre');
	},

};

MyApp.init();
