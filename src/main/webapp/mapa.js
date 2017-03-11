// Váriáveis necessárias
var map;
var infoWindow;

var markersData = [];

function onloadPagina(){
	var myParam = window.location.search.split('arquivo=')[1]
	
	carregaMarcadores(myParam);
}

// Função que carrega os marcadores no mapa.
function carregaMarcadores(arquivoParametro){
	 var xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = function() {
	        if (xhr.readyState == 4) {
	        	console.log(xhr.readyState)
	            var data = xhr.responseText;
	            console.log(data);
	            
	            markersData = JSON.parse(data);
	            initialize();
	        }
	    }
	    xhr.open('GET', "/goodtrash/resources/mapas/"+arquivoParametro+"?"+new Date().getTime(), true);
	    xhr.send(null);
}

// A variável markersData guarda a informação necessária a cada marcador
// Para utilizar este código basta alterar a informação contida nesta variável
/*var markersData = [
    {
        lat: -30.0352334,
        lng: -51.2265611,
        nome: "Faculdade Senac - Porto Alegre",
        endereco: "R. Cel. Genuino, 130 - Centro",
        horario: "Horário: 2ª - 6ª: 09:00 18:00",
        telefone: "3022-9415 / 3022-9469",
        codPostal: "RS - 90010-350 - Brasil"
    },
    {
        lat: -30.2053469,
        lng: -51.1788713,
        nome: "Capatazia Belém Novo",
        endereco: "Av. Juca Batista, 10400 - Belém Novo",
        horario: "2ª - 6ª: 8:00-18:00; sab: 8:00-12:00",
        telefone: "3259-1956",
        codPostal: "RS - 90010-350 - Brasil"
    },
    {
        lat: -30.0343409,
        lng: -51.2109966,
        nome: "Centro Integrado de Desenvolvimento LTDA",
        endereco: "Rua Fernandes Vieira, 553 - Bom Fim",
        horario: "2ª - 6ª: 8:00- 18:45",
        telefone: "3311-2789",
        codPostal: "RS - 90010-350 - Brasil"
    },
    {
        lat: -30.0476852,
        lng: -51.1552038,
        nome: "Capatazia Fátima",
        Endereco: "Rua Alfredo Ferreira Rodrigues, 975 - Bom Jesus",
        horario: "2ª - 6ª: 8:00-18:00; sab: 8:00-12:00",
        telefone: "3367-3777",
        codPostal: "RS - 90010-350 - Brasil"
    },
    {
        lat: -30.1134117,
        lng: -51.1651027,
        nome: "USF Rincão",
        endereco: "Afonso Loureiro Mirante, 1394 - Belem Velho",
        horario: "2ª - 6ª: 08:00 - 12:00 / 13:00 - 17:00",
        telefone: "3241-4770",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.1320707,
        lng: -51.1974867,
        nome: "PSF Nossa Senhora de Belém",
        endereco: "Rua João Couto, 294 - Belem Velho",
        horario: "2°, 3°, 4° 6°: 8:00- 12:00 - 13:00-17:00 5° 8:00-12:00",
        telefone: "3266-9139",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.1056435,
        lng: -51.2385017,
        nome: "Escola Estadual de Ensino Fundamental Paulina Moresco",
        endereco: "Rua Thomé de Souza, 160 - Campo Novo",
        horario: "2ª - 6ª: 8:00-17:00",
        telefone: "3245-3888",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.1105956,
        lng: -51.2345237,
        nome: "Super Mercado do Sino",
        endereco: "Rua Camaquã, 714 - Camaquã",
        horario: "2ª - sab: 08:00 - 12:00 / 14:00 - 20:00",
        telefone: "3249-6933",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.1016963,
        lng: -51.2307886,
        nome: "EMEI Jardim Camaquã",
        endereco: "Rua Jardim das Bromélias, 01 - Camaquã",
        horario: "2ª - 6ª: 7:00-19:00h",
        telefone: "3241-4986",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0329189,
        lng: -51.2295655,
        nome: "Capatazia Cavalhada",
        endereco: "Av. Otto Niemeyer, 3206 - Cavalhada",
        horario: "2ª - 6ª: 8:00-18:00; sab: 8:00-12:00",
        telefone: "3245-5753",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0369883,
        lng: -51.239188,
        nome: "Nova Acrópole Porto Alegre",
        endereco: "Praça Marechal Deodoro, 148 - Centro",
        horario: "2ª - 6ª: 12:00-20:00 sab 10:00-17:00",
        telefone: "3026-71773",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0279745,
        lng: -51.219772,
        nome: "DEP - Fábrica de Pré- moldados",
        endereco: "Av. Loureiro da Silva nº 250 - Centro",
        horario: "2ª - 6ª: 8:00-18:00",
        telefone: "3289-2284",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0363999,
        lng: -51.2390061,
        nome: "Capatazia da Conceição - Sc Centro",
        endereco: "Rua Alberto Bins, elevada Conceição - Centro",
        horario: "2ª - 6ª: 8:00-18:00; sab: 8:00-12:00",
        telefone: "3226-1950",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0023875,
        lng: -51.1160283,
        nome: "EMEF Porto Alegre",
        endereco: "Rua Washington Luis, 203 - Centro",
        horario: "2ª - 6ª: - 8:00-17:00 h",
        telefone: "3227-4429",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0406959,
        lng: -51.2184678,
        nome: "Capatazia Porto Seco",
        endereco: "Av. Plínio Kroeff, 752 - Costa e Silva",
        horario: "2ª - 6ª: 7:30-12:00 13:30 - 17:00 sab:7:30- 12:00",
        telefone: "3347-1964",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0405026,
        lng: -51.2264287,
        nome: "DEP - Lima e Silva",
        endereco: "Rua Gen. Lima e Silva nº 972 - Cidade Baixa",
        horario: "2ª - 6ª: 8:30 às 18:30",
        telefone: "3289-2231",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0426928,
        lng: -51.2189067,
        nome: "Capatazia da República - Sc Centro",
        endereco: "Rua da República, 711 - Cidade Baixa",
        horario: "2ª - 6ª: 8:00-18:00; sab: 8:00-12:00",
        telefone: "3212-8071",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0391368,
        lng: -51.2182996,
        nome: "SENAC Informática",
        endereco: "Av. Venâncio Aires nº 93 - Cidade Baixa",
        horario: " 2ª - 6ª: 8h às 21h",
        telefone: "3029-3633",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0869967,
        lng: -51.2395811,
        nome: "SESC Redenção",
        endereco: "Av. João Pessoa, 835 - Cidade Baixa",
        horario: "2ª - 6ª: 8:00-22:00h",
        telefone: "3226-0631",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0980175,
        lng: -51.2414896,
        nome: " Clube de Mães do Crista",
        endereco: "Rua Curupaiti, 915 - Cristal",
        horario: "2ª - 6ª: à tarde",
        telefone: "99974-6005",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0948385,
        lng: -51.2495349,
        nome: "EMEF Aramy Silva",
        endereco: "Av. Chico Pedro, 390  - Cristal",
        horario: "2ª - 6ª : 7:30-17:50h",
        telefone: "3289-5947 / 3289-5946",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0130643,
        lng: -51.1489953,
        nome: "Colégio Adventista Marechal Rondon",
        endereco: "Rua Mali, 255 - Cristo Redentor",
        horario: "2ª - 6ª: 7:15- 12:00 sab: 13:00- 15:00/ 17:30",
        telefone: "3349-6600 / 3340-3375",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    },
    {
        lat: -30.0191529,
        lng: -51.2046197,
        nome: "Capatazia Câncio Gomes - Sc Norte",
        endereco: "Travessa Carmem, 111 - Floresta",
        horario: "2ª - 6ª: 8:00-18:00; sab: 8:00-12:00",
        telefone: "3395-1327",
        codPostal: "Porto Alegre - RS - CEP - Brasil"
    }

];*/

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(40.601203, -8.668173),
        zoom: 30,
        mapTypeId: 'roadmap',
    };

    map = new google.maps.Map(document.getElementById('container'), mapOptions);

    // cria a nova Info Window com referência à variável infowindow
    // o conteúdo da Info Window será atribuído mais tarde
    infoWindow = new google.maps.InfoWindow();

    // evento que fecha a infoWindow com click no mapa
    google.maps.event.addListener(map, 'click', function () {
        infoWindow.close();
    });

    // Chamada para a função que vai percorrer a informação
    // contida na variável markersData e criar os marcadores a mostrar no mapa
    displayMarkers();
}
google.maps.event.addDomListener(window, 'load', onloadPagina);

// Esta função vai percorrer a informação contida na variável markersData
// e cria os marcadores através da função createMarker
function displayMarkers() {

    // esta variável vai definir a área de mapa a abranger e o nível do zoom
    // de acordo com as posições dos marcadores
    var bounds = new google.maps.LatLngBounds();

    // Loop que vai estruturar a informação contida em markersData
    // para que a função createMarker possa criar os marcadores 
    for (var i = 0; i < markersData.length; i++) {

        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var nome = markersData[i].nome;
        var endereco = markersData[i].endereco;
        var horario = markersData[i].horario;
        var telefone = markersData[i].telefone;
        var codPostal = markersData[i].codPostal;

        createMarker(latlng, nome, endereco, horario, telefone, codPostal);

        // Os valores de latitude e longitude do marcador são adicionados à
        // variável bounds
        bounds.extend(latlng);
    }

    // Depois de criados todos os marcadores
    // a API através da sua função fitBounds vai redefinir o nível do zoom
    // e consequentemente a área do mapa abrangida.
    map.fitBounds(bounds);
}

// Função que cria os marcadores e define o conteúdo de cada Info Window.
function createMarker(latlng, nome, endereco, horario, telefone, codPostal) {
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: nome
    });

    // Evento que dá instrução à API para estar alerta ao click no marcador.
    // Define o conteúdo e abre a Info Window.
    google.maps.event.addListener(marker, 'click', function () {

        // Variável que define a estrutura do HTML a inserir na Info Window.
        var iwContent = '<div id="iw_container">' +
                '<div class="iw_title">' + nome + '</div>' +
                '<div class="iw_content">' + endereco + '<br />' +
                horario + '<br />' +
                telefone + '<br />' +
                codPostal + '</div></div>';

        // O conteúdo da variável iwContent é inserido na Info Window.
        infoWindow.setContent(iwContent);

        // A Info Window é aberta.
        infoWindow.open(map, marker);
    });
}