const $container = $(".container");
const $btn_link = $(".btn_link");
$btn_link.on("click", function() {
	$.getJSON("https://api.myjson.com/bins/jcmhn",)
	.done(function(text) {
 		$container.append(JSON.stringify(text,null,''))
    })
 	.fail(function(jqxhr,textStatus,error) {
 		$container.append(textStatus)	
    });
});


const $result = $(".result");
const $btn_create = $(".btn_create");
$btn_create.on("click", function() {
	const var1 = $(".v1").val();
	const var2 = $(".v2").val();
	const var3 = $(".v3").val();
	const var4 = $(".v4").val();
	const var5 = $(".v5").val();
	const var6 = $(".v6").val();
	const speach = $(".s7").val();
	
	const card =`Жили-были ${var1} да ${var2}, была у них ${var3}, cнесла ${var3} ${var4}, не простое - золотое, - ${var1} бил, бил - не разбил, - ${var2} била, била - не разбила, ${var5} бежала, ${var6} задела, ${var4} упало и разбилось. ${var1} плачет, ${var2} плачет, а ${var3} кудахчет: ${speach}`

	$result.html(card);
 });

