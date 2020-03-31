var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) { // ao clicar em incluir, aciona a função

    event.preventDefault(); // evita que a pagina seja recarregada

    var tr = document.createElement('tr'); // criado elemento vazio

    campos.forEach(function(campo) { // varre cada item do array

        var td = document.createElement('td'); // criado elemento vazio
        td.textContent = campo.value; //chamando o elemento com o conteúdo do campo inserido
        tr.appendChild(td) // adiciona a td na tr

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

});
