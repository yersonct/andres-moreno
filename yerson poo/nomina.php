<?php
class nomina {
    public $sueldo;
    public $arl;
    public $salud;
    public $pension;
    public $total;
    public $descuento;
    public $boto;
    public $transporte;


    public function  sueldo($dias,$pagoPorDia){
        $this->sueldo = $dias * $pagoPorDia;
        return $this->sueldo;
    }
    public function pension(){
        $this->pension = 0.16 * $this->sueldo;
        return $this->pension;
    }
    public function arl(){
        $this->arl =  0.12 * $this->sueldo;
        return $this->arl;
    }
    public function salud(){
        $this->salud =  0.04 * $this->sueldo;
        return $this->salud;
    }
    public function descuento($estrato){
        if($this->sueldo<=1300000*2){
            $this->descuento = $this->arl + $this->salud + $this->pension;
            $this->sueldo += $this->transporte();
            if($estrato == 1 || $estrato == 2){
                $this->sueldo =  $this->boto() + $this->sueldo;
                return $this->descuento - $this->sueldo;
            }else{
                $this->sueldo = $this->sueldo + 0;
                return $this->descuento - $this->sueldo;

            }
        }else{
            $this->descuento = $this->arl + $this->salud + $this->pension;

            if($this->sueldo>=1300000*4 && $this->sueldo < 1300000*6){
                $this->descuento += $this->sueldo * 0.03;
                return  $this->descuento;

            }else if($this->sueldo>=1300000*6 && $this->sueldo < 1300000*8){
                $this->descuento += $this->sueldo * 0.04;
                return  $this->descuento;
            }else if($this->sueldo>=1300000*8 && $estrato ==6){
                $this->descuento += $this->sueldo * 0.05;
                return  $this->descuento;
            }else{
                echo 'no se le hace ninguna retencion';

                return $this->sueldo - $this->descuento;
            }
        }
    }
    public function total(){
        $this->total = $this->sueldo - $this->descuento;
        return $this->total;
    }
    public function boto(){
        $this->boto = 100000 ;
        return $this->boto;
    }
    public function transporte(){
        $this->transporte = 113000;
        return $this->transporte;
    }
    
}




?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    
    <form action="" method="post">
        <label for="dias">Dias trabajados:</label>
        <input type="number" name="dias" id="dias" required>
        <br>
        <label for="pagoPorDia">Pago por dia:</label>
        <input type="number" name="pagoPorDia" id="pagoPorDia
        " required>
        <br>
        <label for="estrato">estrato:</label>
        <input type="number" name="estrato" id="estrato" required>
        <br>
        <input type="submit" value="Calcular">
        </form>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $dias = $_POST["dias"];
                $pagoPorDia = $_POST["pagoPorDia"];
                $estrato = $_POST["estrato"];
                $nomina = new nomina();
                $nomina->sueldo($dias,$pagoPorDia);
                $nomina->arl();
                $nomina->pension();
                $nomina->salud();
                $nomina->transporte();
                $nomina->boto();
                $nomina->descuento($estrato);
                $nomina->total();
                echo "Sueldo: $nomina->sueldo <br>";
                echo "Pension: $nomina->pension <br>";
                echo "Arl: $nomina->arl <br>";
                echo "Salud: $nomina->salud <br>";
                echo "Bono por el estrato: $nomina->boto <br>";
                echo "transporte: $nomina->transporte <br>";
                echo "Descuento: $nomina->descuento <br>";
                echo "Neto: ($nomina->sueldo+$nomina->boto) - ($nomina->pension +
                $nomina->arl+ $nomina->descuento + $nomina->salud)
                <br>";
                echo "Total: $nomina->total<br>";
            }
        ?>
</body>
</html>