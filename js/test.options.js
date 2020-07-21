// Done By Ali Bajaber
(function() {
    
    var transform = [

        {"<>":"div", "text":function(obj,index,_data){
			if(!_data) return("!MISSING EVENT DATA!");
            else return(_data);
        }},

        {"<>":"div", "html":function(obj,index,_data){
			if(!_data) return("!MISSING EVENT DATA!");
            else return(_data);
        }}
    ];
        
    var html = json2html.transform({}, transform,{"data":"EVENT DATA"});

    document.write('<h1>Data Options Test</h1>'+ html);

	document.write('<hr/>');
})();
