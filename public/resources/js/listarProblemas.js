$(document).ready(function () {

       //let user = verificarUsuarioLogado();

    //    Ler documentos
    var tabelaBody = $("#todosProblemas");
    db.collection("problemasCampinas").onSnapshot((querySnapshot) => {
        $(tabelaBody).html('');
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id}=>${doc.data().usuario}`);
            if (currentUser.uid == doc.data().usuario) {
                $(tabelaBody).append(
                    `<tr>
                        <th>${doc.data().usuario}</th>
                        <td>${doc.data().problema}</td>
                        <td>${doc.data().local}</td>   
                        <td>${doc.data().status}</td>
                        <td><a class="btn btn-success" href="./editarProblema.html?idProblema=${doc.id}" id="edit${doc.id}" >Editar</a></td>
                    </tr>`);
            }

        })


    });

});
