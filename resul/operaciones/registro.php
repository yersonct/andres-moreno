<?php

include ('operacion.php');

$info = file_get_contents('php://input');
$numeros = json_decode($info, true);

$num1 = new Numero($numeros['numeroUno']);
$num2 = new Numero($numeros['numeroDos']);
$resul = new Operaciones($num1->getValor(), $num2->getValor());

$mostrar[]= [
                'suma' => $resul->sumar(),
                'resta' => $resul->restar(),
                'multiplicacion' => $resul->multiplicar(),
                'division' => $resul->dividir(),
];

header('Content-Type: application/json');
echo json_encode($mostrar);
?>