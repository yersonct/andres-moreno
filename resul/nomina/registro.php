<?php
    include('codigo.php');
    $info = file_get_contents('php://input');
    $data = json_decode($info, true);

    $salario = new sueldo($data['dias'],$data['pago']);
    $estrato = new estrato($data['estrato']);
    $nomina = new nomina($salario->getSalario(),$estrato->getEstrato());
    $descuento = new descuento($nomina->arlf(),$nomina->pension(),$nomina->saludf(),$nomina->transporte(),$nomina->bono());

    $valor=[
        [
        'salario' => $salario->getSalario(),
        'estrato' => $estrato->getEstrato(),
        'salud'=> $nomina->saludf(),
        'arl' => $nomina->arlf(),
        'pension' => $nomina->pension(),
        'transporte' => $nomina->transporte(),
        'bono' => $nomina->bono(),
        'descuento' => $descuento->mostrar(),
    ]];
    header('Content-type: application/json');
    echo json_encode($valor);

?>

