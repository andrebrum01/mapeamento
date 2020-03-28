
function atualizar(){
    var ponto= "<span class='ponto'></span>";
    var a=$(".item").find(".ponto");
    if(!$("span").hasClass("ponto")){
        $(".topico").prepend( ponto );
    }
    $(".mark").each(function (index) {
        try{
            var geral= $(".color").attr('class').split(" ")[1];
            $(this).children("span").eq(1).removeClass();
            $(this).children("span").eq(1).addClass(geral);
        }
        catch(err){

        }
    });
    $(".item").each(function (index) {
        try{
            var mysecondclass = $(this).children(".box").children(".mark").children("span").eq(1).attr('class');
                try{
                    
                    $(this).children(".topico").children(".ponto").removeClass($(this).children(".topico").children(".ponto").attr('class').split(" ")[1]);
                }catch(era){

                }
                $(this).children(".topico").children(".ponto").addClass(mysecondclass);
        }
        catch(err){

        }
    });
};

atualizar();
$( document ).ready(function() {
    atualizar();
});
$( document ).resize(function() {
    atualizar();
});

// paleta de cor
$(".paleta").click(function (e) { 
    $(this).animate($(this).height(350),1,"ease-in");
    if($(this).height()==350){
        $(this).animate($(this).height(50),1,"ease-in");
    }
});
$(".cor").click(function (e) {
    $(".color").removeClass( $(".color").attr('class').split(" ")[1]);
    $(".color").addClass($(this).attr('class').split(" ")[1]);
    atualizar();
});
$(document).mouseup(function(e) 
{
    var container = $(".paleta");

    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".paleta").animate($(".paleta").height(50),1,"ease-in");
    }
});


// imagems dowload
// onclick
$(".down").click(function () { 
    var img,name;
    html2canvas(document.querySelector("#a")).then(
        canvas=>{
            img = canvas.toDataURL('image/png');            
            name=$(".titlePrincipal").text()+Math.floor(Math.random()*1000)+'.png';
            saveAs(img, name);
        });
    
});

// 
function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }