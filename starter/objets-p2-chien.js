/*
OBJETS - PRÉPA 2 : Modélisation d'un chien
Ecris un programme qui :
1. crée un objet chien contenant
	- les propriétés nom ("Tobby"), race ("Border Collie") et couleur ("bleu merle tricolore") ;
	- la méthode grogner() qui retourne "Grrr ! Grrr !"
		et la méthode aboyer() qui retourne "Wah ! Wah !"
2. affiche dans la console le message "… est un … de couleur …"
3. affiche dans la console le message "Tiens, un chat ! … aboie : …"
	(où … est le nom du chien et … utilise la méthode aboie du chien pour le faire aboyer)
*/

  
  
chien = {
  nom : "Tobby",
  race : "Border Collie",
  couleur : "bleu merle tricolore",
  grogner(){
    console.log("GRRR ! GRRR !");
  },
  aboyer(){
    console.log("WAAF ! WAAF !");
  },
}

console.log(`tiens, un chat ! aboie : ${chien.aboyer()}`);

console.log(`${chien.nom} est un ${chien.race} de couleur ${chien.couleur}`);
