
/**
 * @name UserService
 * @desc Service de gestion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */

import { User } from './../user/user.class';

export class UserService {
    constructor() { }

    /**
     * Lit localStorage pour récupérer un éventuel utilisateur
     * @return boolean
     */
    hasUser() {
        const user = JSON.parse(localStorage.getItem('storiesUser'));
        if (user) {
            return true;
        }
        return false;
    }

    removeUser() {
        localStorage.removeItem('storiesUser');
        this.user = {};
    }
    
    /**
     * Retourne un objet utilisateur à partir du localStorage
     */
    getUser() {
        const localUser = JSON.parse(localStorage.getItem('storiesUser'));
        const user = new User();
        user.setUserName(localUser.userName);
        user.group = localUser.group;

        return user;
    }

}
