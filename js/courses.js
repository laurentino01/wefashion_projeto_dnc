var Malha = window.document.getElementById("malhaIMG");
var Plano = window.document.getElementById("planoIMG");
var Estilismos = window.document.getElementById("estilismoIMG");
var Croqui = window.document.getElementById("croquiIMG");
var MalhaT = window.document.getElementById("malhaTXT");
var PlanoT = window.document.getElementById("planoTXT");
var EstilismosT = window.document.getElementById("estilismoTXT");
var CroquiT = window.document.getElementById("croquiTXT");
var AlunaMalha = window.document.getElementById("aluna_malha");
var AlunaPlano = window.document.getElementById("aluna_plano");
var AlunaEstilismo = window.document.getElementById("aluna_estilismo");
var AlunaCroqui = window.document.getElementById("aluna_croqui");

function TecidoPlano() {
  Malha.style = "display:none";
  Plano.style = "display:flex";
  Estilismos.style = "display:none";
  Croqui.style = "display:none";
  PlanoT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
  MalhaT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  EstilismosT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  CroquiT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  AlunaPlano.style = "display: flex;";
  AlunaMalha.style = "display: none;";
  AlunaEstilismo.style = "display: none;";
  AlunaCroqui.style = "display: none;";
}

function Estilismo() {
  Malha.style = "display:none";
  Plano.style = "display:none";
  Estilismos.style = "display:flex";
  Croqui.style = "display:none";
  PlanoT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  MalhaT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  EstilismosT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
  CroquiT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  AlunaPlano.style = "display: none;";
  AlunaMalha.style = "display: none;";
  AlunaEstilismo.style = "display: flex;";
  AlunaCroqui.style = "display: none;";
}

function Croquis() {
  Malha.style = "display:none";
  Plano.style = "display:none";
  Estilismos.style = "display:none";
  Croqui.style = "display:flex";
  PlanoT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  MalhaT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  EstilismosT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  CroquiT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
  AlunaPlano.style = "display: none;";
  AlunaMalha.style = "display: none;";
  AlunaEstilismo.style = "display: none;";
  AlunaCroqui.style = "display: flex;";
}

function Malhas() {
  Malha.style = "display:flex";
  Plano.style = "display:none";
  Estilismos.style = "display:none";
  Croqui.style = "display:none";
  PlanoT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  MalhaT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
  EstilismosT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  CroquiT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  AlunaPlano.style = "display: none;";
  AlunaMalha.style = "display: flex;";
  AlunaEstilismo.style = "display: none;";
  AlunaCroqui.style = "display: none;";
}

// MOBILE //

var Malha = window.document.getElementById("malhaIMG");
var Plano = window.document.getElementById("planoIMG");
var Estilismos = window.document.getElementById("estilismoIMG");
var Croqui = window.document.getElementById("croquiIMG");
var MalhaBT = window.document.getElementById("malhaBT");
var PlanoBT = window.document.getElementById("planoBT");
var EstilismosBT = window.document.getElementById("estilismoBT");
var CroquiBT = window.document.getElementById("croquiBT");

function TecidoPlanoB() {
  Malha.style = "display:none";
  Plano.style = "display:flex";
  Estilismos.style = "display:none";
  Croqui.style = "display:none";
  PlanoBT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
  MalhaBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  EstilismosBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  CroquiBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
}

function EstilismoB() {
  Malha.style = "display:none";
  Plano.style = "display:none";
  Estilismos.style = "display:flex";
  Croqui.style = "display:none";
  PlanoBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  MalhaBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  EstilismosBT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
  CroquiBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
}

function CroquisB() {
  Malha.style = "display:none";
  Plano.style = "display:none";
  Estilismos.style = "display:none";
  Croqui.style = "display:flex";
  PlanoBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  MalhaBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  EstilismosBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  CroquiBT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
}

function MalhasB() {
  Malha.style = "display:flex";
  Plano.style = "display:none";
  Estilismos.style = "display:none";
  Croqui.style = "display:none";
  PlanoBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  MalhaBT.style =
    "background-color: #FEAE11; padding-right: 10px; color: black;";
  EstilismosBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
  CroquiBT.style =
    "background-color: #152536; padding-rigth: 10px; color: white;";
}
