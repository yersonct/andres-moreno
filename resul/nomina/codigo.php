<?php
class sueldo{
    private $dias;
    private $pago;
    public $salario;

    public function __construct($diass,$pagos){
        $this->dias = $diass;
        $this->pago = $pagos;
    }

    public function setSalario($diass,$pagos){
        $this->dias = $diass;
        $this->pago = $pagos;
    }
    public function getSalario(){
        $this->salario = $this->dias * $this->pago;
        return $this->salario;
    }
}


// $salario = new sueldo(2,5);
class estrato{
    private $estrato;
    public function __construct($estra){
        $this->estrato = $estra;
    }
    public function setEstrato($estra){
        $this->estrato = $estra;
        return $this->estrato;
    }
    public function getEstrato(){
        return $this->estrato;
    }
}



class nomina{
    public $sueldo1;
    public $estrato;
    private $salud;
    private $arl;
    private $pension;
    public $transporte;
    public $bono; 
    public function __construct($suel,$estra){
        $this->sueldo1 = $suel;
        $this->estrato = $estra;
    }

    public function saludf(){
        $this->salud =  0.04 * $this->sueldo1;
        return $this->salud;
    }
    public function arlf(){
        $this->arl = 0.12 * $this->sueldo1;
        return $this->arl;
    }
    public function pension(){
        $this->pension = 0.16 * $this->sueldo1;
        return $this->pension;

    }
    public function transporte(){
        $this->transporte = 113000;
        if($this->sueldo1 >= 1300000*2){
            $this->sueldo1 += $this->transporte;
            return $this->sueldo1;

        }else{
            if($this->sueldo1>=1300000*4 && $this->sueldo1 < 1300000*6){
                $this->sueldo1 -= $this->sueldo1*0.03;
                return $this->sueldo1; 
            }else  if($this->sueldo1>=1300000*6 && $this->sueldo1 < 1300000*8){
                $this->sueldo1 -= $this->sueldo1*0.04;
                return $this->sueldo1; 
            }else if($this->sueldo1>=1300000*8){
                $this->sueldo1 -= $this->sueldo1*0.025;
                return $this->sueldo1;
            }

        }
    }
    public function bono(){
        $this->bono = 100000;
        if($this->estrato ==1 || $this->estrato == 2){
            $this->sueldo1 = $this->bono;
            return $this->sueldo1;
        }else{
            if($this->estrato>=6){
                $this->sueldo1 = $this->sueldo1*0.025;
                return $this->sueldo1;
            }else{

                $this->sueldo1 =0;
                return $this->sueldo1;
            }

        }
    }

}


class descuento{
    private $arlDescuento;
    private $pensionDescuento;
    private $saludDescuento;
    private $sueldoDescuento;
    public $transporteDescuento;
    public $bonoDescuento;
    private  $total;
    private  $descuento;
    

    public function __construct($arl,$pension,$salud,$transporte,$bono){
        $this->arlDescuento = $arl;
        $this->pensionDescuento = $pension;
        $this->saludDescuento = $salud;
        $this->transporteDescuento = $transporte;
        $this->bonoDescuento = $bono;
    }

    public function mostrar(){
        $this->sueldoDescuento = $this->transporteDescuento + $this->bonoDescuento;
        $this->descuento = $this->arlDescuento + $this->pensionDescuento+$this->saludDescuento;
        $this->total = $this->sueldoDescuento - $this->descuento;
        return $this->total;
    }

}




?>