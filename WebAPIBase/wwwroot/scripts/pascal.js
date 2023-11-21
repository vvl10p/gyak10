var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

window.onload = () => {
    pascalfeltolt()
}

var pascalfeltolt = () => {
    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var ujsor = document.createElement("div")
        //új div osztálylistájához add hozzá a "sor"-t
        ujsor.classList.add("sor");
        //új div-et add hozzá a "pascal" gyermekeihez
        document.getElementById("pascal").appendChild(ujsor);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujelem = document.createElement("div")
            //új elem div osztálylistájához add hozzá az "elem"-et
            ujelem.classList.add("elem");
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            ujelem.innerHTML = `${sor}:${oszlop}`;
            //legyen az innerHTML a megfelelő szám
            ujelem.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));
            //új elem div-et vedd fel a sor elemei közé
            ujsor.appendChild(ujelem);
        }
    }
}

