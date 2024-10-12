
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
        .replace("${name}", data.name)
        .replace("${value-send}", data.name)
        .replace("${text}", data.desc);
}

instantAddEmptyObject = () => document.getElementById("content").innerHTML += "<div class='free'></div>";


addObject = (data) => {
    if(data.type == "button") {
        let content = document.getElementById("content");
        content.innerHTML += createBtnString(data);

        objects++;
        if(objects % 2 == 1) instantAddEmptyObject();
    }
    else return;
}

objBtnClick = (name) => {
    // buttons are usually just toggle object
    // so we just send a request to the provided ip / webserver
    // provieded "sendValue" should be a valid IP which should toggle something

    xmlreq("buttonPressed.php?name=" + name + "&type=button", (res) => {
        //data = JSON.parse(res);
        // todo: ? add method to work with new gotton data
        console.log(res);
    })
}

addObject({
    type: "button",
    name: "PC",
    desc: "toggle",
    color: "green",
    send: "",
});
