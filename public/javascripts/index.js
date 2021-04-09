// var editor = new FroalaEditor('#example')


$(document).ready(async () => {

    var editor = await new FroalaEditor('#example')
    $("example").child(".fr-wrapper div").remove()
    
})