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
    var nomeItem = document.createElement("td");

    ano.innerHTML = document.getElementById("ano").value;
    preco.innerHTML  = document.getElementById("preco").value;
    quantidade.innerHTML  = document.getElementById("quantidade").value;
    nomeItem.innerHTML  = document.getElementById("nome_item").value;

    row.appendChild(ano);
    row.appendChild(preco);
    row.appendChild(quantidade);
    row.appendChild(nomeItem);

    table.children[0].appendChild(row);
}

function calcPibNominal() {
    var ano = eval(document.getElementById('ano_nominal').value);
    var resposta = document.getElementById('pib_nominal');

    var tabela = document.getElementById('table');

    var rows = tabela.rows;
    var pib = 0.0;

    for(var x = 1; x<rows.length; x++) {
        if(rows[x].cells[0].innerHTML == ano) {
            pib += parseFloat(rows[x].cells[1].innerHTML) * eval(rows[x].cells[2].innerHTML)
        }
    }
    resposta.innerHTML = "<strong>Valor do PIB Nominal: R$"+pib+"</strong>";

}

function calcPibReal() {
    var ano = eval(document.getElementById('ano_real').value);
    var anoBase = eval(document.getElementById('ano_base_real').value);
    var resposta = document.getElementById('pib_real');

    var tabela = document.getElementById('table');

    var rows = tabela.rows;
    var pib = 0.0;

    if(anoBase > ano) {
        alert("O ano base não deve ser posterior ao ano.");
        return;
    }
    for(var x = 1; x<rows.length; x++) {
        if(rows[x].cells[0].innerHTML == ano) {
            for(var base = 1; base < rows.length; base++) {
                if(rows[base].cells[0].innerHTML == anoBase && rows[base].cells[3].innerHTML == rows[x].cells[3].innerHTML) {
                    pib += eval(rows[base].cells[1].innerHTML) * parseFloat(rows[x].cells[2].innerHTML)
                }
            }
        }
    }
    resposta.innerHTML = "<strong>Valor do PIB Real: R$"+pib+"</strong>";

}