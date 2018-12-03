$(document).ready(function () {



});

function novoProblema() {
    
    
    let problema = $('#problema');
    let local = $('#local');
    let descricao = $('#descricao');
    let imagem = $('#inputFile');
    let status = "Cadastrado";

    let user2 = firebase.auth().currentUser;


    if (user2 != null){

        let user = currentUser.uid;

        if(problema.val() != '' && local.val() != '' && descricao.val() != ''){

            db.collection("problemasCampinas").add({
            usuario: user,
            problema: problema.val(),
            local: local.val(),
            descricao: descricao.val(),
            imagem: imagem.val(),
            status: status
        })
        .then(function (docRef) {
            alert("Problema cadastrado com ID " + docRef.id);
            problema.val('');
            local.val('');
            descricao.val('');
        })
        .catch(function (error) {
            alert("Falha no cadastro de problema: " + error);
        });

        } else{

            alert("Preencha todos os campos");
        }

    } else{

        alert("Nenhum usuário logado");
    }

};
