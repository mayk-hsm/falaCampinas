$(document).ready(function () {



    let user2 = firebase.auth().currentUser;

    console.log(user2);

   // if (user2 != null){

            //    Ler documentos
    var tabelaBody = $("#todosProblemasPrefeitura");
    db.collection("problemasCampinas").onSnapshot((querySnapshot) => {
        $(tabelaBody).html('');
        querySnapshot.forEach((doc) => {
            $(tabelaBody).append(
                `<tr>
                        <th>${doc.data().usuario}</th>
                        <td>${doc.data().problema}</td>
                        <td>${doc.data().local}</td>   
                        <td>${doc.data().status}</td>
                        <td><a class="btn btn-success" href="./visualizarProblema.html?idProblema=${doc.id}" id="edit${doc.id}" >Visualizar</a></td>
                    </tr>`);

        })

    });



   // }




});
