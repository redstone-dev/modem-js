/*
	Don't download this, download the ZIP file.
*/

let Components, Component, Elem, x, y;

const WittyMessages = ["Made in Sublime Text!","*shoots an arrow function out of a bow*","function successfulStartup(){ console.log(this) }",
"This is totally not a witty message :3","It is Wednesday my dudes 🐸",":3","Success on startup!",
"if (java === javascript){ java.name = javascript.name }","That's a pretty hungry family.","Modem.js is NOT a library, it is a framework!",
"The developer plays Overwatch.","I'm using a MacBook Air >:3","Are you using Windows?","Made in ES6!","*dancing squidward*",
"...And remember, kids, the cake is a lie.","How many witty messages are there!?!?","modem_rebuild.js.js.js.js.js.js.js.js.js.js",
"The website is in a seperate folder!","https://scratch.mit.edu/users/redstonelasher2010    <=== Copy and paste into the address bar!",
"Celebrating 7 lines of witty messages!", "Soooooo many methods! Also 8 lines of witty messages >:3","Don't use the old Modem.js, which has a class and constructor. Use this one!",
"Me: 9 lines! Other person: Who has 9 lives? Me: No one does, except cats!", "It is thurrrrzzzdaaayyy my dudes 🐸","It's fri-YAY!", "Me can haz npm reweese? 🥺", "  ||-//", 
"Cheesecake is good.", "Hey, 10 lines of witty messages!", "Written in just 87 lines of code!", "It's no fair! Minecraft gets all the witty crash reports!"];

class ModemCore = {
	constructor() {
		this.Name = "Modem.js";
		this.Version = 0.5;
		this.Description = "";
		this.modem = {
			// Make a specialised 'log' function
			log: log(str) => console.log("Modem.js | " + str),
			err: err(str) => console.log("Modem.js | " + str),

			installer: {
				install: install (modules) => {
					modem.modules = modules;
					log("Modem.js => Module Installer | Successfully installed these packages:");
					for (let i = 0; i < modem.modules.length; i++){
						console.log(">" + modem.modules[i]);
					}
				},

				getters: {
					get getVersion: getVersion (Module) => {
						return modules[Module].ver;
					},
					get getName:  getName (Module) => {
						return modules[Module].nam;
					},
					get getFile: getFile (Module) => {
						return modules[Module].fil;
					},	
				},
			}

			setup: setup() => {
				Components = [];
				Component = {};
				Elem = "";
				log(WittyMessages[Math.floor(Math.random() * WittyMessages.length)]); // Display a witty message
			}

			setElement: setElement(element) => { Elem = getElementByID(element); } // Set the element modem.render() uses to render everything

			addComponent: addComponent(component, label, attrib) => { // Create an element to render with modem.render(). The core of modem.js
				Component = {
					name: component,
					text: label,
					attributes: attrib
				}
				
				if (attrib !== []){
					for (let i = 0; i < attrib.length; i++){
						Component.attributes.push(attrib[i]);
					}
				}

				Components.push(component);
			},

			addAttribute: (componentIndex, attrib) => { Components[componentIndex].attribute.push(attrib) }, // Add attributes
			$CreateComponentDiv: (num) => {
				x = document.createElement("DIV");
				x.id = "Component" + num;
				Elem.appendChild(x);
			}

			render: () => {
				for (let i = 0; i < Components.length; i++) {
					$CreateComponentDiv(i);
				}

				for (let j = 0; j < Components.length; j++) {
					if (Components[j].attributes == [] )
						document.getElementByID("Component" + j).innerHTML = "<" + Components[j].name + ">" + Components[j].text + "</" + Components[j].name + ">";
					} else {
						err("Attributes currently not supported.")	
					}
			}
		}
	}
}
