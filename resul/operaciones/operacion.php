<?php
class Numero{
    private $valor;

    public function __construct($dato){
        $this->valor = $dato;
    }

    public function getValor(){
        return $this->valor;
    }
}

class Operaciones {
    private $numeroUno;
    private $numeroDos;

    public function __construct($numUno, $numDos){
        $this->numeroUno = $numUno;
        $this->numeroDos = $numDos;
    }

    public function sumar(){
        return $this->numeroUno + $this->numeroDos;
    }

    public function restar(){
        return $this->numeroUno - $this->numeroDos;
    }

    public function multiplicar(){
        return $this->numeroUno * $this->numeroDos;
    }

    public function dividir(){
        return $this->numeroDos = $this->numeroUno / $this->numeroDos ;
    }
}
?>