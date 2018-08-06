//DEFINICIÓN DE VARIABLE SUPER AGENT Y BASES PARA LOGRAR BUSCAR
var request = superagent;
var BASE = "https://api.github.com/users/"  //ok
var USER = ""; //provided by input
var token = '?access_token=45df91253f32852a689a06f024d904269bf37138'
var repos = '/repos';
//'https://api.github.com/users/totalBenjick?access_token=45df91253f32852a689a06f024d904269bf37138'

// 
var inpu = document.querySelector("#inpu")

inpu.addEventListener("keyup",function(event){
	event.preventDefault();
	if (event.keyCode === 13){
		USER=inpu.value;
		inpu.value="";
		var API_URL = BASE + USER + token;	
		var API_REPO = BASE + USER + repos + token;
		
		request
			.get(API_URL)
			.then(function(response){
				var photo 		= response.body.avatar_url;
		        var name 		= response.body.name;
		        var login 		= response.body.login;
		        var workplace 	= response.body.company;
		        var location 	= response.body.location;
		        var email 		= response.body.email;
		        var web 		= response.body.site_admin;
				
				var minPhoto 	= document.querySelector("#little__face");
				var maxPhot		= document.querySelector(".imagen__uno");
				var bigName		= document.querySelector(".izquierdo__travis");
				var nick		= document.querySelector(".izquierdo__t3");
				var theCompany	= document.querySelector(".izquierdo__mess__mukter");
				var thePlace	= document.querySelector(".izquierdo__maptag__mx");
				var theMail		= document.querySelector(".izquierdo__mail__arroba");
				var theURL		= document.querySelector(".izquierdo__chain__www");

				minPhoto.src			= photo ;
				maxPhot.src				= photo;
				bigName.textContent 	= name;
				nick.textContent 		= login;
				theCompany.textContent 	= workplace;
				thePlace.textContent 	= location;
				theMail.textContent 	= email;
				theURL.textContent 		= web
									
			})
			
			request
				.get(API_REPO)
				.then(function(respuesta){
					var  array =respuesta.body;
					var template = "";
					var elCatcherRepo = document.querySelector(".repos")
					console.log(elCatcherRepo);
					array.forEach(function(atributo){
						
						var nombreRepo 		= atributo.name;
						var lenguajeRepo 	= atributo.language;
						var forkRepo		= atributo.forks;
						var fechaRepo		= atributo.created_at;
					
					template += `	<article class="repos__single">
			                		<h3 class="repos__single__title">${nombreRepo}</h3>
			                		<p class="repos__single__description">Lab 04</p>
			                		<div class="repos__single__details">
			                 		<p class="repos__single__details__language"><i class="fa fa-circle-thin" aria-hidden="true"></i>
									${lenguajeRepo}</p>
			                    	<p class="repos__single__details__commits"><i class="fa fa-code-fork" aria-hidden="true"></i>
									${forkRepo}</p>
			                    	<p class="repos__single__details__date">${fechaRepo}</p>
			                		</div>
			            			</article>`

					})
					 elCatcherRepo.innerHTML = template;
				})

	}
})












