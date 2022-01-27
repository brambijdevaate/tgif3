function flash(e){
  $('.flash')
   .show()  //show the hidden div
   .animate({opacity: 0.7}, 90) 
   .fadeOut(130)
   .css({'opacity': 0.5});

   shape()
}


// hier bouw je een divje
function shape() {
    var div = document.createElement("div");
    div.className = "svg_shape";
    chance.mixin({
        svg: function(options){
            options = options || {};
            options.size = options.max_size || 30;
            if (typeof options.background === 'undefined') options.background = "#222222";
            if (typeof options.lines === 'undefined') options.lines = 30;
            if (typeof options.circles === 'undefined') options.circles = 3;
            if (typeof options.triangles === 'undefined') options.triangles = 30;
            if (typeof options.opacity === 'undefined') options.opacity = 1;
            options.background = options.background || chance.color();
    
            function point(min, max){
                return chance.integer({ min: min || -40, max: max || 150 });
            }

            var svg = '<svg version="1.1" viewBox="0 0 100 100"';
            svg += 'xmlns="http://www.w3.org/2000/svg"';
            svg += 'style="background-color:' + options.background + '">';
            for (var i = 0; i < options.lines; i++) {
                svg += '<line stroke="' + chance.color() + '" ';
                svg += 'stroke-width="' + point(1, 8) + '" ';
                svg += 'opacity="' + options.opacity + '" ';
                svg += 'x1="' + point() + '" y1="' + point() + '" ';
                svg += 'x2="' + point() + '" y2="' + point() + '" />';
            }
            for (var i = 0; i < options.circles; i++) {
                svg += '<circle cx="' + point() + '" ';
                svg += 'cy="' + point() + '" ';
                svg += 'r="' + point(1, options.max_size / 2) + '" ';
                svg += 'opacity="' + options.opacity + '" ';
                svg += 'fill="' + chance.color() + '"/>';
            }
            for (var i = 0; i < options.triangles; i++) {
                var s = size = options.max_size;
                svg += '<polygon fill="' + chance.color() + '" points="';
                svg += (x = point()) + ',' + (y = point()) + ' ';
                svg += (x + point(-s, s)) + ',' + (y + point(-s, s)) + ' ';
                svg += (x + point(-s, s)) + ',' + (y + point(-s, s));
                svg += '" opacity="' + options.opacity + '" ';
                svg += 'fill="' + chance.color() + '"/>';
            }
            return svg + '</svg>';
        }
    });

    div.innerHTML = chance.svg({
        lines: 30,
        triangles: 30,
        max_size: 50,
        opacity: 1
    });

    document.querySelector('.svg_shapes').appendChild(div);

    
}

// daarin doe je innerhtml, die change svg

// dat divje, appendChild je in flash


//document.querySelector('.flash').appendChild = 

$(document).ready(function() {    
  $('.flash').hide();  
  $(document).mouseup(function(e) { flash(e); });
});


