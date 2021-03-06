// Done By Ali Bajaber

(function() {

    var types = {
		"bool":[true,false],
		"number":[0,2,3,5,6,7,8,9,10,10.1],
		"string":["test","this","out"]
	};

	var transforms = {
		"type":[
			{"<>":"h2", "text":"Array Type (${type})"},
			{"<>":"ul", "html":function(){
				return(json2html.transform(this.values,transforms.item));
			}}
		],
			
		"item":{"<>": "li", "html":[
			{"<>":"span","text":"${value}@${index}"},
			{"<>":"span","text":" === "},
			{"<>":"span","text":function(){
				return([this.value,this.index].join('@'));
			}}
		]}
	};

	var out = '';
    
	out += json2html.transform({"type":"bool","values":types.bool},transforms.type);
	out += json2html.transform({"type":"number","values":types.number},transforms.type);
	out += json2html.transform({"type":"string","values":types.string},transforms.type);

	document.write("<h1>Static Value Array Test</h1>"+ out);

	document.write('<hr/>');
})();