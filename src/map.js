var basic = new Datamap({
  element: document.getElementById("container"),
    done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
              country_name = geography.properties.name;
                details = getData(country_name);
                console.log(details);
            });
        }
});

function getData(countru_name) {
  api_link = `https://restcountries.eu/rest/v2/name/${country_name}?fields=name;capital;currencies;flag;population`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", api_link, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}
