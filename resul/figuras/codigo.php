<?php
class rectangulo{
    private $base1;
    private $altura1;
    private $area1;
    public function __construct($basep1, $alturap1){
        $this->base1 = $basep1;
        $this->altura1 = $alturap1;
    }
    public function areaRectangulo(){
        $this->area1 = $this->base1* $this->altura1;
        return $this->area1;
    }
}
class cuadrado{
    private $lado;
    private $area2;
    public function __construct($ladop){
        $this->lado = $ladop;
    }
    public function areaCuadrado(){
        $this->area2 = pow($this->lado,2);
        return $this->area2;
    }
}
class triangulo{
    private $base2;
    private $altura2;
    private $area3;
    public function __construct($basep2, $alturap2){
        $this->base2 = $basep2;
        $this->altura2 = $alturap2;
    }
    public function areaTriangulo(){
        $this->area3 = ($this->base2*$this->altura2)/2;
        return $this->area3;
    }
}
?>