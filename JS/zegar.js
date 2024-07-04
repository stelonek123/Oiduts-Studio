function zegarek()
{
var Dzisiaj = new Date();

var Godzina = Dzisiaj.getHours();
if (Godzina<10)Godzina = "0"+Godzina;
var Minuta = Dzisiaj.getMinutes();
if (Minuta<10)Minuta = "0"+Minuta;
var Sekunda = Dzisiaj.getSeconds();
if (Sekunda<10)Sekunda = "0"+Sekunda;

document.getElementById("zegar").innerHTML =Godzina+":"+Minuta+":"+Sekunda;
setTimeout("zegarek()",1000);

}