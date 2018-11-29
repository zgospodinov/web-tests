var btn = document.querySelector("#btnUsers");
// console.log(btn);
btn.addEventListener("click", loadData);


function loadData() {
    var url = "https://api.myjson.com/bins/ewsq2";
    var urlUsers = "https://randomuser.me/api/?results=50";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log(xhr.responseText);
            var data = JSON.parse(xhr.responseText);
            outputDataUsers(data);
        }
    };

    xhr.open('GET', urlUsers);
    xhr.send();

    function outputData(data) {
        var output = document.getElementById("tech-stack");
        data.skills.forEach(function (el) {
            output.innerHTML += `${el}<br>`;
            // console.log(el);
        });
    };

    function outputDataUsers(data) {
        var output = document.getElementById("tech-stack");

        console.log(data.results);
        for (let i = 0; i < data.results.length; i++) {
            var element = data.results[i];

            var img = element.picture.large;
            output.innerHTML += `<img src="${img}" alt=""></img>`;

        }


    };
}