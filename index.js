// fetch Data

const getData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

// Constant
const navItems = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania"];

//create navItems
const navList = document.querySelector(".navList");
navItems.forEach((element) => {
    const navItem = document.createElement("li");
    navItem.textContent = element;
    navList.append(navItem);
    navItem.onclick = ()=>{
        
    }
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
        el.style.color = "#" + randomColor;
    };
});

//footer Prettier

const friends = document.querySelector(".friends");
friends.innerHTML = friends.textContent.replace(/\w/g, "<span>$&</span>");
const fSpan = document.querySelectorAll(".friends span");

fSpan.forEach((el) => {
    el.onmouseover = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        el.style.color = "#" + randomColor;
    };
});

//Dark Mode
const mode = document.querySelector(".mode");
mode.onclick = () => {
    if (mode.textContent.includes("Dark Mode")) {
        mode.innerHTML = `<i class="fa-solid fa-sun"></i>` + "Light Mode";
    } else {
        mode.innerHTML = `<i class="fa-solid fa-moon"></i>` + "Dark Mode";
    }
};

//Slider or carousel
const slidesContainer = document.querySelector(".slides-container");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

//card
const cardContainer = document.querySelector(".cardContainer");

getData().then((data) => {
    //random country
    const randomCountry = Math.floor(Math.random() * data.length) + 1;
    data[randomCountry];

    document.querySelector(".nameOfRandomCountry").textContent =
        data[randomCountry].name.common;
    document.querySelector("#Capital").textContent +=
        data[randomCountry].capital;

    document.querySelector("#Continents").textContent +=
        data[randomCountry].continents;
    document.querySelector("#Population").textContent +=
        data[randomCountry].population;
    document.querySelector("#Languages").textContent += Object.values(
        data[randomCountry].languages
    )?.map((el) => el + " ");
    document.querySelector("#Currencies").textContent += Object.values(
        data[randomCountry].currencies
    )?.map((el) => el.name);

    document.querySelector("#Timezones").textContent += data[
        randomCountry
    ].timezones?.map((el) => el + " ");

    document.querySelector("#Borders").textContent += data[
        randomCountry
    ].borders?.map((el) => el + " ");

    document.querySelector(".flagOfRandom").src = data[randomCountry].flags.svg;

    document.querySelector(".googleMapLink").href =
        data[randomCountry].maps.googleMaps;
        //Slider or carousel
    data.map((el) => {
        const slide = document.createElement("img");
        slide.src = el.flags.svg;
        slide.classList.add("slide");
        slidesContainer.append(slide);
        nextButton.addEventListener("click", () => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft += slideWidth;
        });

        prevButton.addEventListener("click", () => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft -= slideWidth;
        });
        setInterval(() => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft += slideWidth;
        }, 4000);
    });
    //create cards
    data.map((el)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        cardContainer.append(card);
        const img = document.createElement("img");
        img.src = el.flags.svg;
        img.classList.add("imageCard");
        const h3 = document.createElement("h3");
        h3.textContent = el.name.common;
        const capital = document.createElement("p");
        capital.textContent = el.capital;
        card.append(img, h3, capital);
    })
});
