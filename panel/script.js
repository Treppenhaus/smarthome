
let objects = 0;
let btnObj = "<div class='obj ${data-color}' onclick='objBtnClick(\"${value-send}\");'>\n"+
             "   <div class='obj-top'>\n"+
                   " <h3 class='obj-name'>\n"+
                    "${name}\n"+
                        "</h3>\n"+
                    "</div>\n"+
                "<div class='obj-btm'>\n"+
                    "<h4 class='btn-text'>\n"+
                    "${text}\n"+
                        "</h4>\n"+
                "</div>\n"+
            "</div>"

xmlreq = (reqUrl, callback) => {
    if(window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", reqUrl, false);
    xmlhttp.send();
}

createBtnString = (data) => {
    return btnObj
        .replace("${data-color}", "data-" + data.color)
        .replace("${name}", data.text)
        .replace("${value-send}", data.send)
        .replace("${text}", data.desc);
}

instantAddEmptyObject = () => document.getElementById("content").innerHTML += "<div class='free'></div>";


addObject = (type, data) => {
    if(type == "button") {
        let content = document.getElementById("content");
        content.innerHTML += createBtnString(data);

        objects++;
        if(objects % 2 == 1) instantAddEmptyObject();
    }
    else return;
}

objBtnClick = (toggleUrl) => {
    // buttons are usually just toggle object
    // so we just send a request to the provided ip / webserver
    // provieded "sendValue" should be a valid IP which should toggle something

    xmlreq(toggleUrl, (res) => {
        data = JSON.parse(res);
        // todo: ? add method to work with new gotton data
    })
}

addObject("button", {
    text: "PC",
    desc: "toggle",
    color: "green",
    send: "10.0.100.36/sh/test_send",
    recv: "10.0.100.36/sh/test_recv"
});

addObject("button", {
    text: "PC",
    desc: "toggle",
    color: "green",
    send: "10.0.100.36/sh/test_send",
    recv: "10.0.100.36/sh/test_recv"
});