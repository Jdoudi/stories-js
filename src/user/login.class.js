class Login {
    constructor() {
        //Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        //Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        //Définition des attributs
        this.login = $("[name=loginField]");
        this.password = $("[name=passwordField]");

        //Définition du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }

    /**
     * formListener Gestionnaire d'événement sur le formulaire de login
     * @param void
     * @return void
     */

    formListener() {

        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'keyup',
            // Callback : fonction appelée si l'événement défini survient
            function (event) {

                //Est-ce que les deux champs sont remplis?
                if (login.val().length >= 5 && password.val() !== '') {
                    //On peut activer le bouton..
                    $('#btnLogin').removeAttr('disabled', 'disabled');
                } else {
                    //Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }

            }
        );
    }

    submitListener() {

        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'submit',
            function (event) {

                event.preventDefault(); //Empeche l'action par défaut..
                //Instancie un nouvel utilisateur
                const user = new User();
                //Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                //Gère l'authentification..
                if (user.authenticate()) {
                    console.log('Ok');
                    // Instancie le menu...
                    const menu = new Menu();
                    menu.setUser(user);
                } else {
                    console.log('Authentification impossible');
                    //Efface les champs et désactive le bouton
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');

                    //On peut instancier un toast
                    const toast = new Toast(
                        {
                            'message': 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                            'duration': 2
                        }
                    );
                    toast.toastIt();
                }
            }
        )
    }

}