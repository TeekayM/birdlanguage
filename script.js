function execute() {
    var inp = document.getElementById("inp");
    var btn = document.getElementById("btn");
    var copy = document.getElementById("copy");
    var txt = document.getElementById("txt");
    var ltr = document.getElementById("ltr");
    var ltrr = document.getElementById("ltrr");
    var vls = "aeiuoăâAEIOUĂĂ"
    var v = Array.from(vls)

    function textAreaAdjust(element) {
        //if (element.scrollHeight == 0) {
        //    element.style.height = "1px"
        //    element.style.height = 2 + "ch"
        //} else {
        //    element.style.height = "1px";
        //    element.style.height = element.scrollHeight + "ch";
        //}
    }
    btn.onclick = function() {
        var charArr = Array.from(inp.value)
        var finString = ""
        for (var elem of charArr) {
            if (v.includes(elem)) {
                if (ltr.value == "") {
                    elem = elem + ltrr.value + elem.toLowerCase()
                } else {
                    elem = elem + ltr.value + elem.toLowerCase()
                }
            }
            finString = finString + elem
        }

        txt.innerText = finString
        textAreaAdjust(txt)
    };
    ltr.onchange = function() {
        if (ltr.value == "") {
            ltrr.hidden = false
            ltrr.value = "p"
        } else {
            ltrr.hidden = true
        }
    }
    copy.onclick = function() {
        txt.select();
        txt.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(txt.innerText);
    }
    cls.onclick = function() {
        inp.value = ""
        textAreaAdjust(inp)
        txt.innerText = ""
        textAreaAdjust(txt)
    }

    inp.onkeyup = function() {
        textAreaAdjust(inp)
    }


    textAreaAdjust(txt)
    textAreaAdjust(inp)
}