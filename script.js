window.addEventListener('load', function() {
    var inp = document.getElementById("inp");
    var btn = document.getElementById("btn");
    var txt = document.getElementById("txt");
    var vls = "aeiuoăâAEIOUĂĂ"
    var v = Array.from(vls)
    btn.onclick = function() {
        var charArr = Array.from(inp.value)
        var finString = ""
        var i = 0;
        for (var elem of charArr) {
            if (v.includes(elem)) {
                elem = elem + "p" + elem.toLowerCase()
            }
            finString = finString + elem
        }

        txt.innerText = finString
    };
})