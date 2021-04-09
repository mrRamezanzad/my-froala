// var editor = new FroalaEditor('#example')


$(document).ready(async () => {

    var editor = await new FroalaEditor('#example')
    console.log("loaded editor");
    $("example").children(".fr-wrapper div").remove()
    console.log("removed advertise");
    
})