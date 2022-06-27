const btnSubmit = document.getElementById("btnSubmit");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
let value;
const rankArray = [];


const setRankArray = () =>  {
    localStorage.setItem("rankArray", JSON.stringify(rankArray))
};


btn1.addEventListener("click", (e) => {
    let value = parseInt(e.target.value)

    if (rankArray.includes(1)) {
        alert("You have already selected 1")
    } else {
        rankArray.pop()
        rankArray.push(value)
        setRankArray();
    }
})

btn2.addEventListener("click", (e) => {
    let value = parseInt(e.target.value)

    if (rankArray.includes(2)) {
        alert("You have already selected 2")
    } else {
        rankArray.pop()
        rankArray.push(value)
        setRankArray();
    }
})

btn3.addEventListener("click", (e) => {
    let value = parseInt(e.target.value)

    if (rankArray.includes(3)) {
        alert("You have already selected 3")
    } else {
        rankArray.pop()
        rankArray.push(value)
        setRankArray();
    }
})

btn4.addEventListener("click", (e) => {
    let value = parseInt(e.target.value)

    if (rankArray.includes(4)) {
        alert("You have already selected 4")
    } else {
        rankArray.pop()
        rankArray.push(value)
        setRankArray();
    }
})

btn5.addEventListener("click", (e) => {
    let value = parseInt(e.target.value)

    if (rankArray.includes(5)) {
        alert("You have already selected 5")
    } else {
        rankArray.pop()
        rankArray.push(value)
        setRankArray();
    }
})


btnSubmit.addEventListener("click", () => {
    if (rankArray == '') {
        alert("You must qualify first")
    }else {
        window.open("../../repo/pages/thank.html", "_blank")
    }
})
