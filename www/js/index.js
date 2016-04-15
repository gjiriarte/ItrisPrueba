/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
	},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};

function submitForm(){
				var _webs = $("[name='rutaws']").val();
				var _users = $("[name='userws']").val();
				var _pass = $("[name='password']").val();
				var _base = $("[name='base']").val();
				
				if (_webs == '') {
					console.log('Este campo está vacío');
					navigator.notification.alert('Este campo está vacío');
					return false;
				} else {
					window.localStorage.setItem("ws",_webs);
				}

				if (_users == '') {
					console.log('Este campo está vacío');
					navigator.notification.alert('Este campo está vacío');
					return false;
				} else {
					window.localStorage.setItem("users",_users);
				}

				if (_pass == '') {
					console.log('Este campo está vacío');
					navigator.notification.alert('Este campo está vacío');
					return false;
				} else {
					window.localStorage.setItem("pass",_pass);
				}

				if (_base == '') {
					console.log('Este campo está vacío');
					navigator.notification.alert('Este campo está vacío');
					return false;
				} else {
					window.localStorage.setItem("base",_base);
					navigator.notification.alert('Datos guardados');
					navigator.notification.beep(2);
					navigator.notification.vibrate(1000);
				}
				
}

function agregar(){
	console.log('Ejecutaste el botón agregar');
	alert('Ejecutaste el botón agregar');
}
	        
function verRuta(){
	console.log('Ejecutaste el botón ruta');
	alert('Ejecutaste el botón ruta');
}	 

function configWS(){
	if (window.localStorage.getItem("ws") && window.localStorage.getItem("base") && window.localStorage.getItem("pass")
		&& window.localStorage.getItem("users")) {
		document.getElementById("rutaws").value = window.localStorage.getItem("ws");
		document.getElementById("base").value = window.localStorage.getItem("base");
		document.getElementById("userws").value = window.localStorage.getItem("users");
		document.getElementById("password").value = window.localStorage.getItem("pass");
		$('#actionform').html('Actualizar');
	} else {
		document.getElementById("reset").style.display="none";
	}
	$('#home').hide();
	$('#configws').show();

}

function irAInicio(){
	$('#home').show();
	$('#configws').hide();
}	 	 

function clearWS(){
	window.localStorage.removeItem("ws");
	window.localStorage.removeItem("base");
	document.getElementById("base").value = '';
	window.localStorage.removeItem("users");
	document.getElementById("userws").value = "";
	window.localStorage.removeItem("pass");
	document.getElementById("password").value = '';
	$('#actionform').html('Grabar');	
	irAInicio();
}

function ConfirmarBorrado(){
	navigator.notification.confirm(
		'Confirma el borrado de datos de conexión?', // message
		 onConfirmCleaner,            // callback to invoke with index of button pressed
		'Logística 1.0',           // title
		['Sí, borrar','Cancelar']     // buttonLabels
	);
}

function onConfirmCleaner(buttonIndex){
	if (buttonIndex == 1) {
		clearWS();
	}
}

function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

function ItsPrompt() {
	navigator.notification.prompt(
		'Please enter your name',  // message
		onPrompt,                  // callback to invoke
		'Registration',            // title
		['Exit', 'Ok', 'Quizás'],             // buttonLabels
		'Jane Doe'                 // defaultText
	);
}