$(document).ready(function(){

  function hrDiagram(starInfo) {
    var dataset = starInfo;
    var w = 900;
    var h = 600;
    var padding = 50;

    //Create scale functions
    var xScale = d3.scale.linear()
               .domain([d3.min(dataset, function(d) {return d[0]; }), d3.max(dataset,function(d) { return d[0]; })])
               .range([padding, w - padding]);
    var yScale = d3.scale.linear()
               .domain([d3.max(dataset, function(d) {return d[1]; }), d3.min(dataset,function(d) { return d[1]; })])
               .range([h - padding, padding]);
    //Define X axis
    var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient('bottom')
              .ticks(5);
    //Define Y axis
    var yAxis = d3.svg.axis()
              .scale(yScale)
              .orient('left')
              .ticks(5);

    //Create SVG element
    var svg = d3.select('#stars')
          .append('svg')
          .attr('width', w)
          .attr('height', h);
    //Create circles
    var star = svg.append('g')
       .attr('id', 'circles')
       .selectAll('circle')
       .data(dataset)
       .enter()
       .append('circle')
       .style('fill', function(d, i){
         if(d[0] < 0  && d[0] > -1){
           return '#3ac6ef';
         }
         else if(d[0] < 1 && d[0] > 0 ){
           return '#e6d41c';
         }
         else {
           return '#ee4b24';
         }
       })
       .attr('class', function(d){
         return d[2];
       })
       .attr('cx', function(d) {
        return xScale(d[0]);
       })
       .attr('cy', function(d) {
        return yScale(d[1]);
       })
       .attr('r', function(d) {
         return 15 - d[1];
       });

    //Create X axis
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (h -padding + 5) + ')')
      .call(xAxis);

    //Create Y axis
    svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + (padding - 5)+ ',0)')
      .call(yAxis);

  }



function starSubset() {

  $.get('/se')
    .done((data) => {
      let starData = [];

      console.log('this is data', data);

      data.forEach( el => {
        let x = [];
        x.push(el.bv, el.absmag, el.starname);
        starData.push(x);
      })

      console.log('this is starData after the forEach', starData);
      hrDiagram(starData)
    })
  }
starSubset()


  // function amnhData() {
  //   $.get( '/se/amnh' )
  //     .done(function( data ) {
  //       console.log(data);
  //       let values = [];
  //
  //       data.forEach(el => {
  //         let starData = [];
  //         starData.push(el.colorb_v, el.absmag,el.label)
  //         values.push(starData)
  //       })
  //
  //     hrDiagram(values)
  //     })
  //   }
  //   amnhData()

})
