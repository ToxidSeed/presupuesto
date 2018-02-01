<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
class BaseDomain{
    protected $mapper = false;  
    protected $identity = null;

    public function getValues(){
        return get_object_vars($this);
    }

    public function getInsertValues(){
        $this->_getInsertValues();
    }
    private function _getInsertValues(){
        $className = get_class($this);
        $reflectedClass = new ReflectionClass($className);
        var_dump($reflectedClass);
    }
       
}
?>
