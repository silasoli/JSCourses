function consultaCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  $.ajax({
    url,
    type: "GET",
    success: function (response) {
      $("#logradouro").html(response.logradouro);
      $("#uf").html(response.uf);
      $("#localidade").html(response.localidade);
      $("#bairro").html(response.bairro);
      $("#titulo_cep").html("CEP " + response.cep);
      $(".cep").show();
    },
    error: function (response) {
      $(".cep").hide();
      alert("CEP não encontrado");
    },
  });
}

$(function () {
  $(".cep").hide();
});
