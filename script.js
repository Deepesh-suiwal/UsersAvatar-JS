const cancel1 = document.querySelector("#btn1");
const submit = document.querySelector("#btn2");
const cancel2 = document.querySelector("#btn3");
const confirm = document.querySelector("#btn4");
const cross = document.querySelector("#cross i")
const popup1 = document.querySelector("#popupbox1");
const popup2 = document.querySelector("#popupbox2");
const input = document.querySelector("#input");
const circle = document.querySelector("#circle");
const plus = document.querySelector("#circle i");
let box = document.querySelector("#box");
let arr = [
    { backgroundColor: "red", color: "white" },
    { backgroundColor: "white", color: "black" },
    { backgroundColor: "#8DECB4", color: "#A34343" },
    { backgroundColor: "#FB9AD1", color: "#00224D" },
    { backgroundColor: "red", color: "white" }
];
function findcolor() {
    return Math.floor(Math.random() * arr.length);
}
plus.addEventListener("click", () => {
    popup1.style.display = "block";
})
submit.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please enter your name")
    }
    else {

        popup1.style.display = "none";
        const span = document.createElement("span");
        span.classList = "user";
        span.innerHTML = input.value[0];
        span.style.textTransform = "capitalize";
        let newcolor = arr[findcolor()];
        span.style.color = newcolor.color;
        span.style.backgroundColor = newcolor.backgroundColor;
        console.log(span);
        box.append(span);
        input.value = "";


        span.addEventListener("click", () => {
            popup2.style.display = "block"
            confirm.addEventListener("click", () => {
                span.remove();
                popup2.style.display = "none";
            })
            cancel2.addEventListener("click", () => {
                popup2.style.display = "none"
            })
        })

    }
})
cancel1.addEventListener("click", () => {
    popup1.style.display = "none";
    input.value = "";
})
cross.addEventListener("click", () => {
    popup1.style.display = "none";
    input.value = "";
})