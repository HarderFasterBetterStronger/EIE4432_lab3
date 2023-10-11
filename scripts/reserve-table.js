

$(document).ready(function(){
    
    //var json_book_info = JSON.parse(book_info);

    //use each to iterate all tables
    $("circle").each(function(i,obj){
        let id = $(this).attr("id")
        let char_id = id.charAt(6)
        
        if (localStorage.getItem(String(char_id))==="1"){
            $(this).addClass("booked")
        }
    })

})

//click tables to change the output val show output
$(document).ready(function(){
    $("#circle1").on("click",function(){

        //judge whether table has been booked
        if (localStorage.getItem("1")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 1?")
            $("#output").val("1")
            //display buttons
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
        
    })
    $("#circle2").on("click",function(){
        
        if (localStorage.getItem("2")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 2?")
            $("#output").val("2")
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
    })
    $("#circle3").on("click",function(){
        
        if (localStorage.getItem("3")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 3?")
            $("#output").val("3")
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
    })
    $("#circle4").on("click",function(){
        
        if (localStorage.getItem("4")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 4?")
            $("#output").val("4")
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
    })

    $("#text1").on("click",function(){
        
        if (localStorage.getItem("1")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 1?")
            $("#output").val("1")
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
    })
    $("#text2").on("click",function(){
        
        if (localStorage.getItem("2")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 2?")
            $("#output").val("2")
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
    })
    $("#text3").on("click",function(){
        
        if (localStorage.getItem("3")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 3?")
            $("#output").val("3")
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
    })
    $("#text4").on("click",function(){
        
        if (localStorage.getItem("4")=="1"){
            alert("This table has been booked.")
        }else{
            $("#output").html("Do you want to book Table 4?")
            $("#output").val("4")
            $("#confirm").removeClass("d-none")
            $("#dismiss").removeClass("d-none")
        }
    })

})

//click confirm to get output val and setItems
$(document).ready(function(){
    $("#confirm").on("click",function(){
        var a = $("#output").val()
        if (a===""){
            alert("Please select table.")
        }
        else{
            localStorage.setItem(a,"1")
            location.reload()
            alert("Book successfully!")
            $("#confirm").addClass("d-none")
            $("#dismiss").addClass("d-none")
        }
        
    })
    $("#dismiss").on("click",function(){
        $("#output").html("Click a Table to book")
        $("#output").val("")
        $("#confirm").addClass("d-none")
        $("#dismiss").addClass("d-none")

    })
    
})