$.urlParam = null;

let idProblema = null;

let url = null;

$(document).ready(function () {

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    url = $.urlParam('idProblema');

    idProblema = window.location.href.split("=")[0];

    editarProblemaPrefeitura(url);

    $('#buttonSalvarAlteracoesPrefeitura').on('click', function () {

        salvarAlteracoesPrefeitura(url);
    })



})

function editarProblemaPrefeitura(id) {

    console.log("IDDDDd botao:" + id);

    let user2 = firebase.auth().currentUser;

    console.log("User: " + user2);



    let docRef = db.collection("problemasCampinas").doc(id);

    docRef.get().then(function (doc) {

        if (doc.exists) {
            $('#problema').val(doc.data().problema);
            $('#local').val(doc.data().local);
            $('#descricao').val(doc.data().descricao);
            $('#status').val(doc.data().status);
            $('#respostaPrefeitura').val(doc.data().resposta);

        } else {
            location.href = "../pages/listarProblemasPrefeitura.html";
        }
    });







}



function salvarAlteracoesPrefeitura(id) {
    let user2 = firebase.auth().currentUser;

    console.log("User: " + user2);

    console.log('resposta:' + $('#respostaPrefeitura').val());
    if (user2 != null) {

        if (document.getElementById('respostaPrefeitura') != '') {

            console.log('resposta:' + $('#respostaPrefeitura').val());

            let docRef = db.collection("problemasCampinas").doc(url);
            docRef.set({

                status: $('#status').val(),
                resposta: $('#respostaPrefeitura').val()
            }, {
                merge: true
            });

            alert("Alterado com sucesso");
            
        } else {

            alert("Preencha o campo de resposta");
        }
    } else {
        alert("Nenhum usuário logado");
    }
}
