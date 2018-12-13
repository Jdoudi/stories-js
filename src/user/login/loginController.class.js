/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */

import { Login } from './../login.class';

export class LoginController {
    constructor() {
        //Définit la vue pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';
        
        //Instancie un nouvel utilisateur
        this.login = new Login();
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */
    getView() {
        //Récupère le placeholder de mon application
        const app = $('[app]');

        $.get(
            this.view,
            function (viewContent) {
                app.empty(); //Vide le contenu le cas échéant
                app.html(viewContent);
            }
        );
    }
}
