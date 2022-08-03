//fetch Data
// const getData = async () => {
//     try {
//         const res = await fetch("https://restcountries.com/v3.1/all");
//         return res.json()
//     } catch (error) {
//         console.log(error);
//     }
// };

// Constant
const navItems = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania"];

//create navItems
const navList = document.querySelector(".navList");
navItems.forEach((element) => {
    const navItem = document.createElement("li");
    navItem.textContent = element;
    navList.append(navItem);

    // navItem.onclick = (e) => {
    //     if (navItem.style.borderBottom) {
    //         navItem.style.borderBottom = "";
    //     } else {
    //         navItem.style.borderBottom = "solid 2px #0096c7";
    //     }
    // };
});

//header Prettier
const h1 = document.querySelector("h1");
h1.innerHTML = h1.textContent.replace(/\w/g, "<span>$&</span>");
const span = document.querySelectorAll("h1 span");

span.forEach((el) => {
    el.onmouseover = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        console.log(randomColor);
        el.style.color = "#" + randomColor;
    };
});

// getData().then((data) => {
//     console.log(data);
//     data.map((el) => {});
// });
