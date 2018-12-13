/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aelion
 * @version 1.0.0
 * @version 1.0.1
*/

export class User {
    constructor() { }

    /**
     * Définit le username de l'utilisateur
     * @param {*} userName
     */
    setUserName(userName) {
        this.userName = userName;
    }

    /**
     * Définit le mot de passe de l'utilisateur
     * @param {*} password
     */
    setPassword(password) {
        this.password = password;
    }

    /**
    * Identifie l'utilisateur à partir d'un login et d'un mot de passe
    * @return boolean
    */
    authenticate() {
        if (this.userName === 'jlaubert' && this.password === 'jla') {
            this.group = 'Administrateur';
            // Ajout de l'utilisateur dans localStorage
            const persistentUser = {
                userName: this.userName,
                group: this.group
            };
            localStorage.setItem('storiesUser', JSON.stringify(persistentUser));

            return true;
        }

        return false;
    }
}