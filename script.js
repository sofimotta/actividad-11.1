document.getElementById("boton").addEventListener("click", async (e) => {

    let gato = await fetch('https://cataas.com/cat')
    .then (res => res.blob())

    console.log(gato)

    function displayImage(src, width, height) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        document.body.appendChild(img);
       }

    displayImage(window.URL.createObjectURL(gato), 200, 200)
})