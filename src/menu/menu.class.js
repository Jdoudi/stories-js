/**
 * @name Menu
 * @desc Service de gestion du menu
 * @author Aelion
 * @version 1.0.0
*/

export class Menu {
    constructor() {
        this.options = [
            { title: 'Accueil', active: 'always', path: '/' },
            { title: 'Toutes les Stories', active: 'isAdmin', path: '/allstories' },
            { title: 'Mes stories', active: 'always', path: '/mystories' },
            {
                title: 'Mon compte', active: 'always', options: [
                    { title: 'Mes préférences', path: '/settings' },
                    { title: 'Changer de mot de passe', path: '/changepassword' },
                    { divider: true },
                    { title: 'Déconnexion', path: '/logout' }
                ]
            }
        ];
    }

    /**
     * Définit l'utilisateur connecté
     * @param {*} user 
     */
    setUser(user) {
        this.user = user;
        // Met à jour le menu Utilisateur
        this._update();

        // Active ou pas les options
        this._activate();
    }

    _update() {
        // Mise à jour de l'option du menu : (userName)
        const userMenu = $('#userMenu');
        userMenu.html(this.user.userName);

        // On définit les options du menu
        const dropdownBlock = $('#userMenuOptions');

        // Virer les options existantes
        dropdownBlock.empty();

        // Recharge les options à partir de la définition
        const userMenuOptions = this.options[3].options;
        for (const option of userMenuOptions) {
            const item = this._makeOption(option);
            item.appendTo(dropdownBlock);
        }

        // En fin de parcours, on affiche le menu
        dropdownBlock.removeClass('hidden');
    }

        /**
        * Nettoie le menu Utilisateur à la déconnexion
        */
    clear() {
        // On définit les options du menu
        const dropdownBlock = $('#userMenuOptions');

        // Virer les options existantes
        dropdownBlock.empty();

        dropdownBlock.addClass('hidden');

        const userMenu = $('#userMenu');
        userMenu.html('Utilisateur');
    }

    _makeOption(option) {
        let item = null;

        if (option.hasOwnProperty('title')) {
            // link logic here
            item = $('<a>');
            item
                .addClass('dropdown-item')
                .attr('href', '#' + option.path)
                .html(option.title);
            // <a class="dropdown-item" href="#">Action</a>
        } else {
            // divider logic here
            // <div class="dropdown-divider"></div>
            item = $('<div>');
            item
                .addClass('dropdown-divider');

        }
        return item;
    }

    _activate() {
        for (let option of this.options) {
            const item = $('[title="' + option.title + '"]');

            if (option.active === 'always') {
                item.removeClass('disabled');
            } else if (option.active === 'isAdmin' && this.user.group === 'Administrateur') {
                item.removeClass('disabled');
            }
        }
    }
}