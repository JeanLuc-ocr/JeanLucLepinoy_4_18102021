function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Définition des constantes

const modalbg = document.querySelector(".bground"); 
const modalBtn = document.querySelectorAll(".modal-btn");
const saisir = document.querySelectorAll(".btn-inscription");
const confirme = document.querySelector(".confirmation");

// Clic sur le bouton "Je m'inscris" - saisie des informations

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Clic sur le bouton "C'est parti" - vérification de la saisie

saisir.forEach((btn) => btn.addEventListener("click", valider_saisie));

// fermeture formualire de saisie par la X
document.getElementById("croix1-fermer").addEventListener("click", function() 
{
	modalbg.style.display = "none";
}
);

// fermeture fenêtre de confirmation par la X

document.getElementById("croix2-fermer").addEventListener("click", function() 
{
	confirme.style.display = "none";
}
);

// fermer thanks via "fermer"
document.querySelector(".btn-fermer").addEventListener("click", function() {
	confirme.style.display = "none";
	modalBg.style.display = "none";
});

/* ===========================================================
   Définitiion des FONCTIONS
   =========================================================== */

/* ===========================================================
   Récupération de la saisie du formulaire.
   =========================================================== */

function launchModal() 
{
  modalbg.style.display = "block";

  document.addEventListener("click", function(Verif_Saisie)
    {
      prenom = document.getElementById("first");
      nom = document.getElementById("last");
      adresse_mel = document.getElementById("email");
      date_naissance = document.getElementById("birthdate");
      nombre_participations = document.getElementById("quantity");
      ville_1 = document.getElementById("location1");
      ville_2 = document.getElementById("location2");
      ville_3 = document.getElementById("location3");
      ville_4 = document.getElementById("location4");
      ville_5 = document.getElementById("location5");
      ville_6 = document.getElementById("location6");
      validation_condition = document.getElementById("checkbox1");
      
      arobase = '@';

      date_jour = new Date();
      annee_jour = date_jour.getFullYear();
      annee_reference = annee_jour - 10;
    }
  )  
}

/* ********************************************************
   Contrôle de la saisie.
   ******************************************************** */

function valider_saisie(vs)                                 
{ 
  annee_naissance = date_naissance.value.substr(0, 4);
  vs.preventDefault();

  
// Controle présence du prénom

  if (prenom.value === "" || prenom.value.length < 2)
  { 
    document.getElementById('erreur_prenom').innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";  
    prenom.focus(); 
    return false; 
  }
  else
  {
    document.getElementById('erreur_prenom').innerHTML="";  
  } 

// Controle présence du nom

  if (nom.value === "" || nom.value.length < 2)
  { 
    document.getElementById('erreur_nom').innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom.";  
    nom.focus(); 
    return false; 
  }
  else
  {
    document.getElementById('erreur_nom').innerHTML="";  
  } 

// Controle présence adresse mél

  if (adresse_mel.value === "" )
  { 
    document.getElementById('erreur_mel').innerHTML="Vous devez saisir un adresse mél valide.";  
    adresse_mel.focus(); 
    return false; 
  }
  else
  {
    document.getElementById('erreur_mel').innerHTML="";  
  } 
  
// Controle adresse de messagerie présence du caractère @

  position_arobase = adresse_mel.value.indexOf(arobase);

  if (position_arobase != -1) 
  {
    document.getElementById('erreur_mel').innerHTML=""; 
    zone_2 = adresse_mel.value.substr(position_arobase + 1, adresse_mel.value.length - position_arobase);
    position_point = zone_2.indexOf('.');
  }
  else
  {
    document.getElementById('erreur_mel').innerHTML="Veuillez saisir le caracètre @ et sa suite.";  
    adresse_mel.focus(); 
    return false; 
  }

// Controle présence d'un point après le caractère @

  if (position_point != -1)
  {
    document.getElementById('erreur_mel').innerHTML=""; 
  }
  else
  {
    document.getElementById('erreur_mel').innerHTML="Adresse mél incomplète, il manque le .fr, .com, .org, etc.";  
    adresse_mel.focus(); 
    return false; 
  }

// Controle présence date de naissance

  if (date_naissance.value === "" )
  { 
    document.getElementById('erreur_date').innerHTML="Vous devez entrer votre date de naissance.";  
    date_naissance.focus(); 
    return false; 
  }
  else

  // Controle si année de naissance >= 1910 et < année en cours - 10

  if (annee_naissance < 1910 || annee_naissance > annee_jour)
  { 
    document.getElementById('erreur_date').innerHTML="Oups ! Etes-vous certain(e) de votre année de naissance ?";  
    return false; 
  }
  else

  //   Controle âge minimum.

  if (annee_naissance >= annee_reference)
  { 
    document.getElementById('erreur_date').innerHTML="Aïe ! N'êtes vous pas un peu trop jeune ?";  
    return false; 
  }
  else
  {
    document.getElementById('erreur_date').innerHTML="";  
  }

// Controle présence nombre de participation(s).

  if (!nombre_participations.value)
  { 
    document.getElementById('erreur_participation').innerHTML="Veuillez entrer un nombre de participation : de 0 à 99.";  
    nombre_participations.focus(); 
    return false; 
  }
  else

  // Controle si nombre de participations compris entre 0 et 99.

  if (nombre_participations.value < 0 || nombre_participations.value >99)
  {  
    document.getElementById('erreur_participation').innerHTML="Le nombre de participations doit être compris entre 0 et 99.";  
    nombre_participations.focus(); 
    return false; 
  }
  else
  {
    document.getElementById('erreur_participation').innerHTML="";  
  }

// Controle sélection ville si nombre de participations > à 0.

  if (nombre_participations.value > 0 &&
    !ville_1.checked == true && 
    !ville_2.checked == true && 
    !ville_3.checked == true && 
    !ville_4.checked == true && 
    !ville_5.checked == true && 
    !ville_6.checked == true) 
    {
      document.getElementById('erreur_ville').innerHTML="Vous devez sélectionner une ville.";  
      nombre_participations.focus(); 
      return false; 
    }
    else
    {
      document.getElementById('erreur_ville').innerHTML="";  
    }

// Controle Validation acceptation des Conditions d'Utilisation.

    if  (!validation_condition.checked === true)
    {
      document.getElementById('erreur_valid').innerHTML="Vous devez vérifier que vous acceptez les termes et les conditions.";  
      validation_condition.focus(); 
      return false; 
    }
    else 
    {
      document.getElementById('erreur_valid').innerHTML="";
    }

    affiche_confirme();
}     


/* ********************************************************
   Affichage Confirmation
   ******************************************************** */

function affiche_confirme()
{
  modalbg.style.display = "none";
  confirme.style.display = "block"; 
}