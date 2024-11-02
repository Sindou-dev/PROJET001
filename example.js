var restart ;
do {
    // Appel des fonctions 
    
    function Addition(nombreA, nombreB) {
        return nombreA + nombreB;
    }
    
    function Multiplication(nombreA, nombreB) {
        return nombreA * nombreB;
    }
    
    function Soustraction(nombreA, nombreB) {
        return nombreA - nombreB;
    }
    
    function Division(nombreA, nombreB) {
        if (nombreB == 0) {
            throw new Error("Impossible de diviser par 0");
            
        }
        return nombreA / nombreB;
    }
    
    // Demander un mode d'operation à l'utilisateur
    
    var choix;
    do {
        choix   = prompt('Que souhaitez-vous faire ? \n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division ');
    } while (choix  !=1 && choix  !=2 && choix  !=3 && choix  !=4 );
    
    // Demander à l'utilisateur d'entrer deux nombre 
    
    var premierNombre, deuxiemeNombre;
    do {
        premierNombre   = Number(prompt('Entrez un premier nombre :'));
        deuxiemeNombre   = Number(prompt('Entrez un deuxieme nombre :'));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));
    
    // Calcul du résultat
    
    var resultat;
    try {
        switch(choix){
        
        
            case '1':
                resultat    = Addition(premierNombre, deuxiemeNombre);
                break;
            case '2':   
                resultat    = Multiplication(premierNombre, deuxiemeNombre);
                break;
            case '3':
                resultat    = Soustraction(premierNombre, deuxiemeNombre);
                break;
            case '4':
                resultat    = Division(premierNombre, deuxiemeNombre);
                break;
        
            default :
                throw new Error("Attention une erreur est survenue");
                
        }
        
        // Affichage du résultat
        
        alert('Voici le résultat : ' + resultat );
    } catch (error) {
        alert(error.message);
    }
    
    restart = confirm('Voulez-vous recommencer un calcul ?');
} while (restart);
