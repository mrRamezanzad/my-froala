// var editor = new FroalaEditor('#example')


$(document).ready(async () => {

    var editor = await new FroalaEditor('#example')
    console.log("loaded editor");
    $('.fr-wrapper div').first().remove();
    console.log("removed advertise")
    
})