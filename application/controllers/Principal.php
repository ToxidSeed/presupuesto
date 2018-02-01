<?php
require_once BASECONTROLLERPATH.'BaseController.php';

class Principal extends BaseController{
    function index(){
        $this->load->view('Base/Header');                
        $this->load->view('Principal');       
        $this->load->view('Base/Footer');                         
    }    
}
?>