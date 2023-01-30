/*
OBJETS - PRÉPA 1 : Création d'un personnage
Aurora est représentée par un objet  aurora ayant quatre propriétés :  nom,  sante,  force et xp (expérience).
Elles ont chacune une valeur et, ensemble, définissent l'état de notre personnage à un instant donné.
Aurora s'apprête à vivre une longue série d'aventures, dont certaines pourront modifier ses caractéristiques.
1. crée un objet nommé aurora contenant les propriétés nom, sante, force et xp
    avec les valeurs "Aurora", 150, 25 et 0
2. ajoute à cet objet une méthode decrire()
    qui retourne "… a … points de vie, … en force et … points d'expérience"
    en compétant les … par les valeurs d'aurora
3. utilise cette méthode pour afficher la description d'aurora
4. affiche dans la console "Aurora apprend une nouvelle compétence"
5. ajoute 15 points d'expérience à aurora
6. réaffiche la description d'aurora 
7. affiche dans la console "Aurora est blessée par une flèche"
8. retire 20 points de santé à aurora
9. affiche "Aurora trouve un bracelet de force"
10. ajoute 10 points de force à Aurora
11. réaffiche la description d'aurora
*/

aurora = {
  nom : "aurora",
  sante : 150,
  force : 25,
  xp : 0,
  decrire() {
    console.log(`${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience`);
  }
}

aurora.decrire();
console.log(`${aurora.nom} apprend une compétence`);
aurora.xp += 15;
aurora.decrire();
console.log("Aurora est blessée par une flèche");
aurora.sante -= 20;
console.log("Aurora trouve un bracelet de force");
aurora.force += 10;
aurora.decrire()

