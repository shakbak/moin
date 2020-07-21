// Done By Ali Bajaber
$(function() {
    
	var data = {

		"area":"https://via.placeholder.com/15/0000FF/FFFFFF/",

		"base":"/",

		"col":2,

		"command":"Save",

		"embed":"",

		"img":"https://via.placeholder.com/150",
		
		"input":"Placeholder...",

		"link":"https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css",

		"meta":"JSON2HTML Tests",

		"source":"",

		"track":""
	};

    var transforms = [

		{"<>":"area","shape":"rect","coords":"19,28,222,228","href":"${area}","target":"_blank","html":"!IGNORED!"},
		
		{"<>":"base","target":"_blank","href":"${base}","html":"!IGNORED!"},

		{"<>":"br","html":"!IGNORED!"},
		
		{"<>":"col","span":function(){return(this.col);},"html":"!IGNORED!"},
		
		{"<>":"command","type":"command","label":"${command}","onclick":"save()","html":"!IGNORED!"},
		
		{"<>":"embed","src":"${embed}","html":"!IGNORED!"},
		
		{"<>":"hr","html":"!IGNORED!"},

		{"<>":"img","src":"${img}","html":"!IGNORED!"},

		{"<>":"input","type":"text","placeholder":"${input}","html":"!IGNORED!"},

		{"<>":"keygen","name":"name","challenge":"${keygen}","keytype":"type","keyparams":"pqg-params","html":"!IGNORED!"},
		
		{"<>":"link","href":"${link}","rel":"stylesheet","html":"!IGNORED!"},

		{"<>":"meta","name":"description","content":"${meta}","html":"!IGNORED!"},

		{"<>":"param","name":"${param}","value":"true","html":"!IGNORED!"},

		{"<>":"source","src":"${source}","type":"audio/x-ms-wma","html":"!IGNORED!"},

		{"<>":"track","src":"${track}","kind":"subtitles","srclang":"it","label":"Italian","html":"!IGNORED!"},
		
		{"<>":"wbr","html":"!IGNORED!"}
	];

	$('body').append("<h1>Void Elements Test</h1><p>Requires inspection of HTML</p>");

	$("body").json2html(data,transforms);
	
	$("body").append("<hr/>");
});
