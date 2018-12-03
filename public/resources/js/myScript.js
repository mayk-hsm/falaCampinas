function voltarLogin() {

    location.href = "../pages/login.html";
}

function validaInfo() {

    let email = document.getElementById('email').value;

    let senha = document.getElementById('senha').value;

    let confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha == confirmaSenha) {

        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(function () {
                
            })
            .then(function () {
                user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: $('#nome').val() + " " + $('#sobrenome').val(),
                });
                voltarLogin();
            })
            .catch(function (error) {

                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });

    } else {

        alert("Senhas não correspondentes");

    }
}

function autenticarUsuario() {

    let email = document.getElementById('email_autenticacao').value;

    let senha = document.getElementById('senha_autenticacao').value;

    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, senha).then(function () {

        console.log(email);

        if(email == 'prefeitura@gmail.com'){

            location.href = "../pages/listarProblemasPrefeitura.html";
        } else{

            location.href = "../pages/listarProblemas.html";
        }

        


    }).catch(function (error) {

        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        alert("Usuário não cadastrado");

    });
}

function resetaSenha() {

    var auth = firebase.auth();
    var emailAddress = document.getElementById('email_reset').value;
    auth.sendPasswordResetEmail(emailAddress).then(function () {
        voltarLogin();
    }).catch(function (error) {

        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Email inválido");

    });
}

function trocaSenha() {

    let user2 = firebase.auth().currentUser;


    if (user2 != null){

        var auth = firebase.auth();
    var emailAddress = document.getElementById('email_troca').value;
    auth.sendPasswordResetEmail(emailAddress).then(function () {
        alert("Email enviado com sucesso");
        document.getElementById('email_troca').value = '';
    }).catch(function (error) {

        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Email inválido");

    });




    } else{

        alert("Nenhum usuário logado");
    }

    
}

function logoff() {
    let user = firebase.auth().currentUser.uid;
    console.log(user);
    firebase.auth().signOut().then(function () {
        console.log("Signoff success");

        voltarLogin();

    }).catch(function (error) {
        console.log(error);
    });
}