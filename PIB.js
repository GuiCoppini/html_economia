function handleClick(event) {
    var consumo = eval(document.getElementById("consumo").value);
    var invest = eval(document.getElementById("invest").value);
    var gastos = eval(document.getElementById("gastos").value);
    var exports = eval(document.getElementById("exports").value);
    var imports = eval(document.getElementById("imports").value);

    var pib = 0;
    pib = eval(consumo+invest+gastos+exports-imports);

    var text = document.getElementById("valor");
    text.innerHTML = "Valor do PIB: "+pib;
}

function addRow() {
    var table = document.getElementById("table");
    
    var row= document.createElement("tr");
    console.log(row);
    var ano = document.createElement("td");
    var preco = document.createElement("td");
    var quantidade = document.createElement("td");    

    ano.innerHTML = document.getElementById("ano").value;
    preco.innerHTML  = document.getElementById("preco").value;
    quantidade.innerHTML  = document.getElementById("quantidade").value;

    row.appendChild(ano);
    row.appendChild(preco);
    row.appendChild(quantidade);

    table.children[0].appendChild(row);
}