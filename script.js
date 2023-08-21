const dayelem = document.querySelector(".days")
const hourelem = document.querySelector(".hours")
const minelem = document.querySelector(".minutes")
const secelem = document.querySelector(".seconds")


const second = 1000, min = 60 * second, hour = 60 * min, day = 24 * hour;

const timerFunction = () => {

    setInterval(() => {
        const timer = new Date("08/19/2030").getTime();
        const today = new Date().getTime();
        const diff = timer - today;

        if (diff > 0) {
            const dayleft = Math.floor(diff / day);
            const hoursleft = Math.floor((diff % day) / hour);
            const minutesleft = Math.floor((diff % hour) / min);
            const secondsleft = Math.floor((diff % min) / second);
            console.log(`${dayleft}:${hoursleft}:${minutesleft}:${secondsleft} `);

            dayelem.innerHTML = dayleft;
            hourelem.innerHTML = hoursleft;
            minelem.innerHTML = minutesleft;
            secelem.innerHTML = secondsleft;
        } else {
            clearInterval(timerFunction);
        }


    }, 1000);

}
timerFunction();

