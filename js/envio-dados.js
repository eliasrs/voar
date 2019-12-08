var botaoEnviar = document.querySelector("#enviar"); //seleciona elemento botão

botaoEnviar.addEventListener("click", function(event){  //escutando o evento (click) no botão buscar enviar
	//requisição em uma url para ir buscar os dados no endereço
	event.preventDefault() //tira a ação pré definida do botão
	console.log(botaoEnviar);
	enviaParaGoogle(botaoEnviar);
	alert("Dados enviados com sucesso. Obrigado por confiar em nosso trabalho... Faremos o melhor para garantir seu direito.");
	





									/*
									var xhr = new XMLHttpRequest(); // XMLHttpRequest = objeto do js para fazer requisição HTTP assíncronas,transporta xml e outros tipos de dados, mas precisar configurar com alguns funções;
									xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // abre a conexao do tipo get para o endereço heroku.. (servidor)
									
									xhr.addEventListener("load", function(){  // escutar se a resposta já foi carregada
										//antes de tratar a requisição, colocou o if para depois que carregou a requisição vazer verificação de erros
										var erroAjax = document.querySelector("#erro-ajax"); // cria a var e seta o elemento <span> para futuramente receber msg de erro
										if(xhr.status == 200) { //verifica o status da requisição, se o endereço está disponível, ==200 é quando OK.
											erroAjax.classList.add("invisivel"); // como status do esta OK, então add class invisivel para a msg de erro <spam>
											


										} else {
											console.log(xhr.status); //mostra o número do status, nesse caso de erro
											console.log(xhr.responseText);// resposta do erro
											
											erroAjax.classList.remove("invisivel");
										}
									});
									xhr.send();// função para envivar requisição da conexao que foi criada
									*/
});



function enviaParaGoogle(botaoEnviar) {
                var field1 = $("#aaa-00").val();
                var field2 = $("#aaa-01 option:selected").val();
                var field3 = $("#aaa-02").val();
                var field4 = $("#aaa-1 option:selected").text();
                var field5 = $("#aaa-11 option:selected").text();
                var field6 = $("#aaa-111 option:selected").text();
                var field7 = $("#aaa-112 option:selected").text();
                var field8 = $("#aaa-12 option:selected").text();
                var field9 = $("#aaa-121 option:selected").text();
                var field10 = $("#aaa-122 option:selected").text();
                var field11 = $("#aaa-13 option:selected").text();
                var field12 = $("#aaa-131 option:selected").text();
                var field13 = $("#aaa-14 option:selected").text();
                var field14 = $("#aaa-141 option:selected").text();
                var field99 = $("#aaa-113 option:selected").text();


 				/*
				if(field1 == ""){
					alert('Please Fill Your Name');
					document.getElementById("nameField").focus();
					return false;
				}
				if(field2 == ""){
					alert('Please Fill Your Email');
					document.getElementById("emailField").focus();
					return false;
				}
				if(field3 == "" || field3.length > 10 || field3.length < 10){
					alert('Please Fill Your Mobile Number');
					document.getElementById("mobField").focus();
					return false;
				}
				*/

				
	
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSexAgWxlUuQllakzYEThAKTbE-QZWnQcejwnPyFD_8SFWiU2A/formResponse?",
					data: {"entry.2005620554": field1, "entry.1045781291": field2, "entry.1065046570": field3, "entry.1166974658": field4, "entry.839337160": field5, "entry.476863189": field6, "entry.82302703": field7, "entry.1142874749": field8, "entry.216407954": field9, "entry.1678186098": field10, "entry.1061448330": field11, "entry.1246540602": field12, "entry.609587428": field13, "entry.1701184606": field14, "entry.1386077352": field99},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
}