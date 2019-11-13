function submitform() {
    var form = document.getElementById("converter");
    console.log(form);

    form.addEventListener("submit", function (event) {
        console.log("Saving value", form.elements.value.value);
        event.preventDefault();
    });
}
