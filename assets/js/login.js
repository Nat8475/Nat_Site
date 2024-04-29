
    

$(function () {
  $("#form_login").submit(function () {
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    var email = $("#email").val();

    //if( nome == '' ) { alert('Preencha o campo nome'); return false; }
    if (email == "" || !er.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Preencha o campo email corretamente!",
          })
      return false;
    }

    // Se passou por essas validações exibe um alert
    alert("formulário enviado com sucesso!");
  });
});
