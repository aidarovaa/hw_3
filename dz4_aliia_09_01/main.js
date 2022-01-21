const input = document.getElementById('country-name');
const name = document.getElementById('name');
const region = document.getElementById('region');
const subregion = document.getElementById('subregion');
const capital = document.getElementById('capital');
const flag = document.getElementById('flag');

let xhr = new XMLHttpRequest();

const inputVal = () => {
    if (xhr.status === 404){
        alert(`Ошибка ${xhr.status}: ${xhr.statusText} "Введите правильное название страны"`)
    } else {
        fetch(`https://restcountries.com/v3.1/name/${input.value}`).then((data) => {
            data.json().then(response => {
                name.innerText = response[0].name.common;
                region.innerText = response[0].region;
                subregion.innerText = response[0].subregion;
                capital.innerText = response[0].capital;
                flag.innerHTML = `<img src="${response[0].flags.png}"/>`;
            })
        })
    }
}

const tbody = document.getElementById('tbody');
fetch ('https://restcountries.com/v3.1/all').then((data) => {
    data.json().then(response => {
        console.log(response)
        response.forEach(element => {
            const all = document.createElement("tr")
            all.setAttribute("id", "all")
            tbody.append(all)

            const code = document.createElement("td")
            code.setAttribute("id", "code")
            code.innerText = element.cca2
            all.append(code)

            const flag = document.createElement("img")
            flag.setAttribute("src", element.flags.png)
            flag.style.height = "50px"
            all.append(flag)

            const name = document.createElement("td")
            name.setAttribute("id", "name")
            name.innerText = element.name["common"]
            all.append(name)

            const capital = document.createElement("td")
            capital.setAttribute("id", "capital")
            capital.innerText = element.capital
            all.append(capital)

            const population = document.createElement("td")
            population.setAttribute("id", "population")
            population.innerText = element.population
            all.append(population)
        })
    })
})

