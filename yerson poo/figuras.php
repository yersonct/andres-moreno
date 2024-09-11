<?php
class figuras{
    public $ladoCuadrado;
    public $baseTriangulo;
    public $alturaTriangulo;
    public $alturaRectangulo;
    public $baseRectangulo;
    public $areaTriangulo;
    public $areaCuadrado;
    public $areaRectangulo;
    public function areaCuadrado($lado){
        $this->ladoCuadrado = $lado;
        $this->areaCuadrado = $this->ladoCuadrado*$this->ladoCuadrado;
        return $this->areaCuadrado;
    }
    public function areaTriangulo($base,$altura){
        $this->baseTriangulo = $base;
        $this->alturaTriangulo = $altura;
        $this->areaTriangulo = ($this->baseTriangulo*$this->alturaTriangulo)/2;
        return $this->areaTriangulo;
    }
    public function areaRectangulo($base,$altura){
        $this->baseRectangulo = $base;
        $this->alturaRectangulo = $altura;
        $this->areaRectangulo = $this->baseRectangulo*$this->alturaRectangulo;
        return $this->areaRectangulo;
    }

}


?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <label for="base">Base del rectangulo:</label>
        <input type="number" name="base" id="base" required>
        <br>
        <label for="altura">Altura del rectangulo:</label>
        <input type="number" name="altura" id="altura" required>
        <br>
        <input type="submit" value="Calcular">
    </form>
    <?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $base = $_POST["base"];
        $altura = $_POST["altura"];
        $rectangulo = new figuras();
        $rectangulo->areaRectangulo($base,$altura);
        echo "El area del rectangulo es: $rectangulo->areaRectangulo";
    }
    ?>
</body>
</html>