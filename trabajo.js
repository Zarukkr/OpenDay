var inicio=document.getElementById("Inicio")
var medio=document.getElementById("medio")
var final=document.getElementById("final")
var cosa=document.getElementById("cosa")


function ocultar1mostrar2(){
    if(medio.style.display=="none"){
    document.getElementById("Inicio").style.display = "none";
    document.getElementById("medio").style.display = "block";
    document.getElementById("final").style.display = "none";
    document.getElementById("cosa").style.display = "none";
}}
function ocultar2mostrar3(){
    if(final.style.display=="none")
    document.getElementById("medio").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("Inicio").style.display = "none";
    document.getElementById("cosa").style.display = "none";
}
function ocultar3mostrar4(){
    if(cosa.style.display=="none")
    document.getElementById("final").style.display = "none";
    document.getElementById("cosa").style.display = "block";
    document.getElementById("Inicio").style.display = "none";
    document.getElementById("medio").style.display = "none";
}
function mostrarinicio(){
if(inicio.style.display=="none"){
    document.getElementById("Inicio").style.display = "block";
    document.getElementById("medio").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("cosa").style.display = "none";
}}