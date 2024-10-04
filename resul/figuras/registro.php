<?php
    include('codigo.php');
    $info = file_get_contents('php://input');
    $datos = json_decode($info,true);
    $area1 = new rectangulo($datos['baseRectangulo'],$datos['alturaRectangulo']);
    $area2 = new cuadrado($datos['lados']);
    $area3 = new triangulo($datos['baseTriangulo'],$datos['alturaTriangulo']);

    $mostrar[]=[
        "areaRectangulo"=>$area1->areaRectangulo(),
        "areaTriangulo"=>$area3->areaTriangulo(),
        "areaCuadrado"=>$area2->areaCuadrado(),
    ];

    header('Content-type: application/json');
    echo json_encode($mostrar);
?>

