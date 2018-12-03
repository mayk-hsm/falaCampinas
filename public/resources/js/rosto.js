$(document).ready(function () {

    let user2 = firebase.auth().currentUser;

    console.log(user2);
    //    Ler documentos
    var tabelaBody = $("#todosProblemas");
    db.collection("problemasCampinas").onSnapshot((querySnapshot) => {
        $(tabelaBody).html('');
        querySnapshot.forEach((doc) => {
            $(tabelaBody).append(
                `<tr>
                        <td>${doc.data().problema}</td>
                        <td>${doc.data().local}</td>   
                        <td>${doc.data().status}</td>
                        <td><a class="btn btn-success" href="../public/pages/visualizarProblemaPublico.html?idProblema=${doc.id}" id="edit${doc.id}" >Detalhes</a></td>
                    </tr>`);
        })

    });
});
