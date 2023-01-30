/*****************************
* 025 - Objets et propriétés
*/

/* 
	UN OBJET  est un conteneur qui contient plusieurs valeurs :
	dans un tableau, chaque valeur était associée à un indice,
	dans un objet, chaque valeur est associée à une étiquette 
*/
/*
JavaScript permet de programmer en utilisant des objets :
on dit que JavaScript est un langage est *orienté objet*.
Voici la représentation JavaScript d'un stylo à bille Bic qui écrit en bleu.
*/

// Déclaration littérale d'un objet

const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

var monSmartPhone = {
	modele: 'XS Max',
	marque: 'Apple',
	memoire: 512,
	tailleEcran: 6.5,
	prix: 1100
};

/* 
RAPPELS :
- les types primitifs = les booléens, les nombres et les chaînes de caractères
- une variable de type primitif : un conteneur qui contient une seule valeur
- Un tableau (Array) est un conteneur qui continent plusieurs valeurs
- Chaque élément du tableau est une valeur et chaque emplacement est numéroté par un indice
- Pour les tableaux (Array), l’indice est un entier (il commence à zéro)
- Array est un type composite

OBJET  
- Un objet est un conteneur qui contient plusieurs valeurs
- Chaque élément d'un objet est une paire "étiquette:valeur" : chaque valeur est associée à une étiquette
- => la différence entre un tableau indicé et un objet (on dit aussi parfois "tableau associatif"), c'est que
	* dans un tableau indicé, la clé qui permet de repérer une valeur est un indice (un numéro), alors que
	* dans un objet, la clé qui permet de repérer une valeur est une étiquette (chaîne de caractères)
- On dit aussi qu'un objet est un ENSEMBLE DE PROPRIÉTÉS 
- Chaque élément d'un objet est une paire "propiété:valeur"
- Chaque propriété d'un objet est en fait une variable qui contient une valeur
- Un objet est un type composite
*/

/* Une PROPRIÉTÉ est une VARIABLE associée à un objet */
// const stylo = {
//   type: "bille",
//   couleur: "bleu",
//   marque: "Bic"
// };
/* par exemple, couleur est un proriété de stylo :
c'est en fait une variable (couleur) qui contient une valeur (bleu)
représentant une proriété de mon objet stylo */



// 1. Initialiser un nouvel objet

// 1°) Première méthode d'initialisation : déclaration littérale
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

/*
EXERCICE 1 : 
- Crée un objet 'moi' qui te présente et contient les propriétés suivantes :
	nom, prenom, age, profession, nationalite
- Affiche l'objet que tu viesn de créer dasn la console
*/

const moi = {
  nom : "Senga-vita",
  prenom : "blanchar",
  age : 22,
  profession : "etudiant",
  nationaliste : "belge"
}



// 2. Accéder aux propriétés d'un objet

// 1°) Première méthode : l'opérateur d'accession aux éléments d'un tableau : les "[]"
/* Pour accéder aux valeurs des éléments d’un objet (ou tableau associatif), on utilise l'opérateur [],
avec cette fois une chaîne de caractères (entre ' ' ou " ") comme seconde opérande, comme ceci : 
monObjet['étiquette']
monObjet['propriete']
*/
// console.log(john['lastName']);

// 2°) Dexième méthode : l'opérateur d'accession aux propriétés d'un objet : le "."
/* On peut aussi utiliser la syntaxe suivante :
monObjet.maPropriete
*/
// console.log(john.firstName);

/* N.B. Si on a stocké le nom de la propriété dans une varaible,
		on doit utiliser la syntaxe à crochets */
// var x = 'birthYear';
// console.log(john[x]);
// console.log(john.x) ; // ceci ne fonctionnera pas car john n'a pas de propriété x

/*
EXERCICE 2 : 
- Affiche dans la console : "Je m'appelle … …, j'ai … ans, je suis … et je suis …"
	en allant à chaque fois rechercher les propriétés dans l'ojet 'moi' que tu viens de créer
*/

console.log(`je m'appelle ${moi.prenom} ${moi.nom}, j'ai ${moi.age} ans, je suis ${moi.profession} et je suis ${moi.nationaliste}`);


//console.log('Je m\'appelle ' + moi.prenom + ' ' + moi.nom + ' , j\'ai ' + moi.age + ' ans, je suis ' + moi.job + ' et je suis ' + moi.nationalite);




// 3. Modifier les propriétés d'un objet

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

/* N.B. Un objet ne possède pas de longueur
		(on ne peut pas écrire objet.length) */

/*
EXERCICE 3 : 
- Trois années se sont écoulées, tu es sorti(e) de l'école, tu es à présent 'Web Developer'
	et tu t'es marié(e).
	console.log("Trois années se sont écoulées, je suis sorti(e) de l'école, il s'en est passé des choses… ");
	Mets à jour tes propriétés pour refléter ces changements.
- Affiche l'objet 'moi' mis à jour dans la console.
- Affiche à nouveau ta description dans la console :
	"Je m'appelle … …, j'ai  … ans, je suis à présent un … (métier) … (nationalité) et je suis … (état civil)"
	en allant à chaque fois rechercher les propriétés dans l'objet 'moi' que tu viens de créer
*/

console.log("Trois années se sont écoulées, je suis sorti(e) de l'école, il s'en est passé des choses… ");

moi.etatCivil = "married";
moi.age += 3;
moi.profession = "Web developpeur";

console.log(`Je m'appelle ${moi.prenom}, j'ai ${moi.age} ans, je suis à présent un ${moi.profession} je suis ${moi.nationaliste} et je suis ${moi.etatCivil}`)





/*
EXERCICE 4 :
- Crée un objet stylo qui possède trois priorétés :
	type (bille), couleur (bleu) et marque (bic)
- Affiche chacune de ses propriétés dasn la console
- Affiche "J'écris avec un stylo …(type) …(couleur) de marque …" 
	en accédant à ses propriétés
- Modifie sa propriété "couleur" pour qu'il écrive en rouge
- Affiche "J'écris avec un stylo … … de marque …"
	en accédant à ses nouvelles propriétés
- Ajoute une propriété "prix" avec la valeur 2.5
- Affiche "Mon stylo coûte … euros"
*/


const stylo = {
  type : "bille",
  couleur: "bleu",
  marque : "bic",
}










/* *************************************** */

// 1. Initialiser un nouvel objet (… petit retour en arrière pour compléter…)

// 2°) Deuxième méthode d'initialisation : la syntaxe new Object()
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

