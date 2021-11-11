let button = document.querySelector("button");
let entrees = document.querySelector('.entrees');

//AJOUTER UNE NOUVELLE TACHE 

let ingredients = ['1 avocat bien mûr', '1 tomate', '1 petit citron', '1 gousse d’ail', 'Un peu d’oignon', "Sel et poivre", "Quelques gouttes de tabasco"]

let etapes = [
'ÉTAPE 1 : Couper l’avocat en 2, l’éplucher et enlever le noyau. Le couper en petits cubes et transférer dans une coupelle. Écraser l’avocat à l’aide d’une fourchette.',
'ÉTAPE 2 : Laver et couper la tomate. Mélanger avec l’avocat.',
'ÉTAPE 3 : Ajouter le jus de citron, quelques gouttes de tabasco, du sel et du poivre, et un peu d’oignon coupé très finement.',
'ÉTAPE 4 : Mettre la gousse d’ail entière dans le guacamole et laisser reposer pendant 30 minutes.',
'ÉTAPE 5 : Ôter l’ail. Servir avec des nachos.'
]





button.addEventListener("click", function () { ajouterRecette(ingredients)})

function ajouterRecette(ingredients) {

	//CREATION DES DIFFERENTES VARIABLES

	let nomPlat = document.createElement("h1");
	let divFood = document.createElement('div')
	let img = document.createElement('img')
	let info = document.createElement('div')
	let info2 = document.createElement('div')
	let temps = document.createElement('div')
	let iconeTemps = document.createElement('i')
	let texteTemps = document.createElement('p')
	let difficulte = document.createElement('div')
	let iconeDifficulte = document.createElement('i')
	let texteDifficulte = document.createElement('p')

	let lesIngredients = document.createElement('div')
	let nombreDePersonne = document.createElement('h2')
	let listeIngredients = document.createElement('div')

	let preparation = document.createElement('div')
	let titrePreparation = document.createElement('h2')
	let lesEtapes = document.createElement('div')





	//RELATION PARENT/ENFANT

	entrees.appendChild(nomPlat);
	entrees.appendChild(divFood)
	divFood.appendChild(img)
	divFood.appendChild(info)
	info.appendChild(info2)
	info2.appendChild(temps)
	info2.appendChild(difficulte)
	temps.appendChild(iconeTemps)
	temps.appendChild(texteTemps)
	difficulte.appendChild(iconeDifficulte)
	difficulte.appendChild(texteDifficulte)

	info.appendChild(lesIngredients)
	lesIngredients.appendChild(nombreDePersonne)
	lesIngredients.appendChild(listeIngredients)

	divFood.appendChild(preparation)
	preparation.appendChild(titrePreparation)
	preparation.appendChild(lesEtapes)
	




	//AJOUT DES CLASSES

	nomPlat.classList.add('entrees');
	divFood.classList.add('food');
	img.classList.add("imgPlat")
	info.classList.add("info")
	info2.classList.add('info2')
	temps.classList.add('temps')
	difficulte.classList.add('difficulte')
	iconeTemps.classList.add("fas", "fa-clock", "fa-3x")
	texteTemps.classList.add('temps',  "texteTemps")
	iconeDifficulte.classList.add("fas" ,"fa-hard-hat" ,"fa-3x")
	texteDifficulte.classList.add('difficulte', 'texteDifficulte')

	lesIngredients.classList.add('ingredients')
	nombreDePersonne.classList.add('nombreDePersonne')
	listeIngredients.classList.add('listeIngredients')

	preparation.classList.add('preparation')
	titrePreparation.classList.add('titrePreparation')


	//AJOUT DU TEXTE ET IMAGE 

	nomPlat.textContent = "Guacamole";
	texteTemps.textContent ='10 minutes'
	texteDifficulte.textContent = "Facile"
	nombreDePersonne.textContent = "Ingrédients pour 3 personnes :"
	titrePreparation.textContent = 'Préparation : '
	img.src = "images/guacamole.jpg"

	for(ingredient of ingredients) {
		let pIngredients = document.createElement('p')
		pIngredients.classList.add('listeIngredients', 'ingredientRecette')
		pIngredients.textContent = ingredient
		listeIngredients.appendChild(pIngredients)

	}

	for(etape of etapes) {
		let pEtapes = document.createElement('p')
		pEtapes.classList.add('parEtape')
		pEtapes.textContent = etape
		preparation.appendChild(pEtapes)

	}


}


