

$(document).ready(function(){
    $.get("assets/drink-menu.json",function(data){
        
        for (var i=0;i<data.length;i++){
            var data1=data[i]
            
            var id = data1.name;
            var name = data1.name;
            var type = data1.type;
            var price = data1.price;
            var image = data1.image;
            
            var output = `
            <div class="col mt-2 mb-2 " >
                <div class="card " id="${id}">
                    
                    <img width="200" height="400" src="${image}" class="card-img-top">
                    
                    <div class="card-body ">
                        <h6 class="card-title">${name}</h6>
                        <div class="text-left">
                            <p  class=" btn btn-success "style="--bs-btn-padding-y: .2rem; --bs-btn-padding-x: .4rem; --bs-btn-font-size: .6rem;">${type}</p>
                        </div>
                        <p class="card-sm-text">${price}</p>
                    </div>
                </div>
            </div>
            `.trim()
            $("#drink-menu").append(output)

        }

    }).fail(function(error){

        var output =`
        <div class = "border col rounded bg-danger-subtle">
            <p class="text-danger ">Failed to fetch drink menu. Please try again later.</p>
        </div>
        `

        $("#menu").html(output)

    })
})



//When window scroll to bottom hide footer
let footerVisible = false;
var docHeight = 0;

$(window).scroll(function(event) {
	function footer()
    {
        var scroll = $(window).scrollTop(); 
        if(scroll > 50)
        { 
            $(".footer-nav").fadeIn("slow").addClass("show");
        }
        else
        {
            $(".footer-nav").fadeOut("slow").removeClass("show");
        }
        
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            if ($('.footer-nav').is(':hover')) {
	        	footer();
    		}
            else
            {
            	$(".footer-nav").fadeOut("slow");
            }
		}, 1000));
    }
    footer();
});
