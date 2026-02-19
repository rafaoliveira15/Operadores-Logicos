function verificar() {
    
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const n3 = Number(document.getElementById("num3").value);


    const c1 = n1 < 5;
    const c2 = n2 < 5;
    const c3 = n3 < 5;


    let texto = " Valores digitados: <strong>" + n1 + ", " + n2 + ", " + n3 + "</strong><br><br>";


    texto += " Condição 1 (n1 < 5): <strong>" + c1 + "</strong><br>";
    texto += " Condição 2 (n2 < 5): <strong>" + c2 + "</strong><br>";
    texto += " Condição 3 (n3 < 5): <strong>" + c3 + "</strong><br>";


    const resultado = c1 || c2 || c3;


    texto += "<br> Operação lógica: <strong>" + c1 + " || " + c2 + " || " + c3 + "</strong><br>";
    texto += "<br> Resultado final: <strong>" + resultado + "</strong><br>";


    texto += "<br>Obs: o operador || retorna true se PELO MENOS UMA condição for verdadeira.";


    document.getElementById("resultado").innerHTML = texto;
}

