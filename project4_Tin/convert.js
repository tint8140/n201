
function ConvertToIb()
{
  var pounds, kilos;
  
  pounds = parseFloat(document.getElementById('pound').value);
  
  kilos= KiloToPound(pounds);
  kilos= Math.round(kilos*100)/100;
  document.getElementById('outputDiv').innerHTML = 
    'That is ' + kilos + ' pounds.';
}
function ConvertToKG()
{
  var pounds, kilos;
  
  pounds = parseFloat(document.getElementById('kilo').value);
  
  kilos = PoundToKilo(pounds);
  kilos= Math.round(kilos*100)/100;
  document.getElementById('InputDiv').innerHTML = 
    'That is ' + kilos + ' kilograms.';
}


function KiloToPound(pounds) {
  var kilos;

  kilos = pounds * 2.2046226218;
  return kilos;
}

function PoundToKilo(kilos) {
  var pounds;

  pounds = kilos * 0.45359237;
  return pounds;
}