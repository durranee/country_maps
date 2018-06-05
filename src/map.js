var basic = new Datamap({
  element: document.getElementById("container"),
  done: function(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      country_id = geography.id;
      api_link = getAPILink(country_id);
      details = getData(api_link)
        .then(function(details) {
          console.log(details);
          updatePage(details);
        });
    });
  }
});

function getAPILink(country_id) {
  return `https://restcountries.eu/rest/v2/alpha/${country_id}`
}

function getData(api_link) {
  data = fetch(api_link)
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      alert(error);
    });
  return data;
}

function updatePage(details) {
  document.getElementById("name").innerHTML = details.name;
  document.getElementById("capital").innerHTML = details.capital;
  document.getElementById("currency").innerHTML = details.currencies[0].name;
  document.getElementById("population").innerHTML = details.population;
  document.getElementById("flag").innerHTML = details.flag;
}
