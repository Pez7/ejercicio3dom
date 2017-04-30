function mostrarInfo(){
	var mostrarM = document.getElementById('mostrarNombre');
	var mostrarE = document.getElementById('mostrarMail');
	var nombre = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	

	mostrarM.innerHTML = "<h3>Nombre: </h3>" + nombre;
	mostrarE.innerHTML = "<h3>Email: </h3>" + email;

}