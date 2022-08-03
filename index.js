// const getData = async () => {
//     try {
//         const res = await fetch("https://restcountries.com/v3.1/all");
//         return res.json()
//     } catch (error) {
//         console.log(error);
//     }
// };

getData().then((data)=>{
    console.log(data);
    data.map(()=>{
        
    })
})
