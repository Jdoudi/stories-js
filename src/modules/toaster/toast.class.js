/** 
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aelion
 * @version 1.0.0
 */

export class Toast {
    constructor(params) {
        if (!params.hasOwnProperty('background')) {

            //Paramètre de définition de la couleur de fond du toast
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            //Durée d'affichage du toast (en secondes)
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'default message';
        } else {
            this.message = params.message;
        }
    }


    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    toastIt() {
        //Crée en mémoire un nouvel élément dans le DOM
        const toaster = $('<div>');

        //On lui ajoute les classes
        toaster
            .addClass('toast')
            .addClass(this.backgroundClass)
            .addClass('animated')
            .addClass('fadeInDownBig')
            .html(this.message.bold());

        // Ajoute le toaster au document lui-même
        toaster.appendTo($('body'));

        //Affiche pendant un certain temps
        setTimeout(
            function () {
                setTimeout(
                    function() {
                        toaster
                        .addClass('fadeOutRightBig')
                    }
                    (this.duration / 2 ) * 1000
                );
                //Ici, quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            },
            this.duration * 1000
        );
    }
}