function calculatePrice(){
    var price = 0
    let drink = document.getElementById("drink")
    var output = document.getElementById("price")
    let small=document.getElementById("small")
    let medium=document.getElementById("medium")
    let large=document.getElementById("large")

    if (drink.value!="none"){
        if (drink.value=="Bubble Milktea"){
                if (small.checked == true){
                    price = 30
                }
                else if (medium.checked == true){
                    price = 35
                }
                else if (large.checked == true){
                    price = 40
                }
            }
            else if (drink.value=="Iced Latte"){
                if (small.checked == true){
                    price = 42
                }
                else if (medium.checked == true){
                    price = 47
                }
                else if (large.checked == true){
                    price = 52
                }
            }
        output.innerHTML = price
        
    } 
    else {
        alert("Please select the drink.")
        small.checked = false;
        medium.checked = false;
        large.checked = false;
    }
}

function validateForm(){
    let name = String(document.getElementById("name").value).trim()
    
    let drink = document.getElementById("drink")

    let small=document.getElementById("small").checked
    let medium=document.getElementById("medium").checked
    let large=document.getElementById("large").checked

    let normal = document.getElementById("Normal").checked
    let less = document.getElementById("Less").checked
    let withoutice = document.getElementById("Without Ice").checked


    let hundred = document.getElementById("100").checked
    let fifty = document.getElementById("50").checked
    let zero = document.getElementById("0").checked

    

    if (name == "") {
        alert("Please enter your name")
        return false
    }

    if (drink.value == "none") {
        alert(" Please select a drink first.")
        return false
    }
    if (!(small || medium || large)) {
        alert("Please select a size.")
        return false
    }
    if (!(normal || less || withoutice)) {
        alert("Please select an ice preference.")
        return false
    }
    if (!(hundred || fifty || zero)) {
        alert("Please select a sweetness level.")
        return false
    }
    return true
}

function placeOrder(event){
    event.preventDefault()
    
    if (validateForm()){
        let name = String(document.getElementById("name")).trim()
        let drink = document.forms["form"]["drink"].value
        let size = document.forms["form"]["size"].value
        let ice = document.forms["form"]["Ice"].value
        let sweetness = document.forms["form"]["Sweetness"].value
        let orderData = [name,drink,size,ice,sweetness]
        localStorage.setItem("orders",orderData)
        //new alert by using div
        $("#orderalert").html("<div >Order placed successfully! Thank you for your order.</div>")
        $("#orderalert > div").addClass("alert alert-success").attr("role","alert")
        $("#orderalert").removeClass("d-none").fadeIn(500).delay(3000).fadeOut(500)
        $("#inside").remove()
        //alert("Order placed successfully! Thank you for your order.")
        document.getElementById("form").reset() 
        var output = document.getElementById("price")
        output.innerHTML = 0
        

    }
    
}

function reset1(){
    var output = document.getElementById("price")
    output.innerHTML = 0
}


//JQuery
 
$(document).ready(function(){

    $("#name").on("click",function(){
        if ($("#name").val()===""){
            $("#name").addClass("error");
            $("#name").removeClass("error-free");
        }
        else{
            $("#name").addClass("error-free");
            $("#name").removeClass("error");
        }
    })
    $("#name").on("change",function(){
        if ($("#name").val()===""){
            $("#name").addClass("error");
            $("#name").removeClass("error-free");
        }
        else{
            $("#name").addClass("error-free");
            $("#name").removeClass("error");
        }
    })

    
    $("#drink").on("click",function(){
        if ($("#drink").val()==="none"){
            $("#drink").addClass("error");
            $("#drink").removeClass("error-free");
        }
        else{
            $("#drink").addClass("error-free");
            $("#drink").removeClass("error");
        }
    })
    $("#drink").on("change",function(){
        if ($("#drink").val()==="none"){
            $("#drink").addClass("error");
            $("#drink").removeClass("error-free");
        }
        else{
            $("#drink").addClass("error-free");
            $("#drink").removeClass("error");
        }
    })

})

//drink preview
$(document).ready(function(){
    $("#drink").on("click",function(){
        if ($("#drink").val()==="none"){
            $("#drinkpreviewdiv").addClass("d-none");
        }
        if ($("#drink").val()==="Bubble Milktea"){
            $("#drinkpreview").attr("src","assets/bubble-milktea.png");
            $("#drinkpreview").attr("alt","bubble milktea");
            $("#drinkpreviewdiv").removeClass("d-none");
        }
        else if ($("#drink").val()==="Iced Latte"){
            $("#drinkpreview").attr("src","assets/iced-latte.jpg");
            $("#drinkpreview").attr("alt","iced-latte");
            $("#drinkpreviewdiv").removeClass("d-none");
        }
        else if ($("#drink").val()==="Pineapple Juice"){
            $("#drinkpreview").attr("src","assets/caramel-macchiato.jpg");
            $("#drinkpreview").attr("alt","caramel-macchiato");
            $("#drinkpreviewdiv").removeClass("d-none");
        }
        else{
            $("#drinkpreviewdiv").addClass("d-none");
        }
        
    })
    $("#drink").on("change",function(){
        if ($("#drink").val()==="Bubble Milktea"){
            $("#drinkpreview").attr("src","assets/bubble-milktea.png");
            $("#drinkpreview").attr("alt","bubble milktea");
            $("#drinkpreviewdiv").removeClass("d-none");
        }
        else if ($("#drink").val()==="Iced Latte"){
            $("#drinkpreview").attr("src","assets/iced-latte.jpg");
            $("#drinkpreview").attr("alt","iced-latte");
            $("#drinkpreviewdiv").removeClass("d-none");
        }
        else if ($("#drink").val()==="Pineapple Juice"){
            $("#drinkpreview").attr("src","assets/caramel-macchiato.jpg");
            $("#drinkpreview").attr("alt","caramel-macchiato");
            $("#drinkpreviewdiv").removeClass("d-none");
        }
        else{
            $("#drinkpreviewdiv").addClass("d-none");
        }
        
    })
})
    

//When window scroll to bottom hide footer
$(document).ready(function(){
    $(window).scroll(function() {
        if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
            $('#footer').hide();
        }
     });
 });