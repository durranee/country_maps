var basic = new Datamap({
  element: document.getElementById("container"),
    done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                alert(geography.properties.name);
            });
        }
});
console.log(basic);
// basic.options.fills.defaultFill = "#000"
console.log(basic.options.fills.defaultFill);
