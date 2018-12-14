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
        //Appel vers le serveur :
        // GET http://localhost:3000/users/:login/:password

        let user = this;
        return new Promise((resolve) => {
            $.ajax({
                url: 'http://localhost:3000/users/' + this.userName + '/' + this.password,
                method: 'get',
                responseType: 'json',
                success: function (datas) {
                    const srvUser = datas[0];

                    if (srvUser) {
                        user.name = srvUser.nom;
                        user.forname = srvUser.prenom;
                        user.userName = srvUser.identifiant;
                        user.group = srvUser.Fonction;

                        const persistenUser = {
                            userName: user.userName,
                            group: user.group
                        };

                        // On ajoute l'utilisateur au localStorage
                        localStorage.setItem('storiesUser', JSON.stringify(user));

                        // C'est bon, j'ai bien un utilisateur
                        resolve(true);
                    } else {
                        // Pas d'utilisateur 
                        resolve(false);
                    }
                },
                error: function (xhr, error) {
                    resolve(false);
                },
            });


        })
    }
}