document.getElementById("button").onclick = function(){
    /*Swal.fire({
        icon: "success",
        title: "Você logou com Sucesso",
        //showDenyButton: true,
        confirmButtonText: "Voltar"
    })
    
    
    /*
    Swal.fire({
        icon: "warning",
        title: "Você tem certeza?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Salvar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
        } else if(result.isDenied) {
            Swal.fire("As mudanças não foram salvas", "", "info");
        }
    })*/
}
document.getElementById("email").onclick = function(){
    this.value = ''
}