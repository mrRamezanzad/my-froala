// var editor = new FroalaEditor('#example')


$(document).ready(async () => {

    var editor = await new FroalaEditor('#example')
    $("example").children(".fr-wrapper div").remove()
    
})