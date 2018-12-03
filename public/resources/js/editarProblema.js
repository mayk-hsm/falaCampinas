
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

    editarProblema(url);

    $('#buttonSalvarAlteracoes').on('click',function(){

    salvarAlteracoes(url);
})



})

function editarProblema(id) {

console.log("IDDDDd botao:" + id);

    let docRef = db.collection("problemasCampinas").doc(id);

    docRef.get().then(function (doc) {

        if (doc.exists) {
            $('#problema').val(doc.data().problema);
            $('#local').val(doc.data().local);
            $('#descricaoAlterar').val(doc.data().descricao);
            $('#resposta').val(doc.data().resposta);


        } else {
            location.href = "../pages/listarProblemas.html";
        }
    });


}



function salvarAlteracoes(id){


   if($('#descricaoAlterar').val() != ''){


    console.log("url botao:" + url);

    let docRef = db.collection("problemasCampinas").doc(url);

            docRef.set({

                descricao: $('#descricaoAlterar').val(),

                        }, {merge: true});
    
    alert("Alterado com sucesso");


   } else{

    alert("Preencha o campo Descrição");
   }


    




        


}