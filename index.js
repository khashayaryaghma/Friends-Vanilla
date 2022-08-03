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
const navItems = ["Asia", "Europe", "Americas", "Africa", "Oceania"];

//create navItems
const navList = document.querySelector(".navList");
navItems.forEach((element) => {
    const navItem = document.createElement("li");
    navItem.textContent = element;
    navList.append(navItem);
});

getData().then((data) => {
    console.log(data);
    data.map((el) => {});
});
