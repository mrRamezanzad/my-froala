var editor = new FroalaEditor('#example')

document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
        console.log("getting document ready");
    } else if (state == 'complete') {
        document.querySelector("#example .fr-wrapper div").style.display = "none"

    }
  }​;