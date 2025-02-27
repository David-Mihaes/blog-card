const colorPciker = document.querySelector(".color-picker");
colorPciker.addEventListener("input", (e) => {
    console.log(e.target.value);
    document.documentElement.style.setProperty("--primary", e.target.value);
})