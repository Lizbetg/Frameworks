import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

// Autora: Lizbeth Dolores Monforte Loria

/*Este pequeño programa consiste en un formulario de información personal, en el que se considera el nombre, 
la edad, el pasatiempo y la fecha de cumpleaños del usuario; a partir de los cuales se calculan e imprimen los días, horas
y minutos que ha vivido, así como el cálculo del tiempo en horas y días que falta para su cumpleaños */

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {nombre: 'Liz', edad: '22', pasatiempo: 'Pintar', fechacumpleaños:'31-12-2021'};
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  

  handleSubmit(event) {

   //Cálculo del tiempo que falta para el cumpleaños

    var FechaNacimiento = this.state.fechacumpleaños;
    // Primero creamos un array, separando valores
    var a1 = FechaNacimiento.split('-'); // [07, 10, 2022]
    // Luego invertimos el orden
    var a2 = a1.reverse(); // [2022, 10, 07]
    // Crear cadena aaaa-mm-dd
    var cadena = a2.join('-');

    // Crear objeto de fecha
    var fechaIni = new Date(cadena);
    // Crear objeto de fecha final (actual)
    var fechaFin = new Date();

    // Calcular diferencia en milisegundos
    var diff = fechaIni - fechaFin;

    // Calcular días
    var diferenciaDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    var horas = Math.floor(diff / (1000 * 60 * 60));

    
    alert('El ser humano: ' + " " + this.state.nombre + ", " + "ha vivido un total de: " + " " + this.state.edad*365 + " " + "días" 
    + " " + this.state.edad*8760 + " " + "horas" + " " + this.state.edad*525600 + " " + "minutos" + ", " + "su hobbie favorito es:"
    + " " + this.state.pasatiempo + "." + " " + "Faltan" + " " + diferenciaDias + " " + "días " + " y " + horas + " " + "horas" + " " + "para su cumpleaños");
    event.preventDefault(); 
    

     
  }

  

  render() {
    return (
  
      <form onSubmit={this.handleSubmit}>
        
        <h1><center><font color="blue">Formulario de información personal</font></center></h1>
        <center><label>Nombre</label></center> 
        <center><input onChange={this.handleChange} type="nombre" value={this.props.nombre} placeholder="nombre"/></center>
        <center><label>Edad</label></center> 
        <center><input onChange={this.handleChange} type="edad" value={this.props.edad} placeholder="edad"/></center>
        <center><label>Fecha de cumpleaños (año,mes,día)</label></center>  
        <center><input onChange={this.handleChange} type="fechacumpleaños" value={this.props.fechacumpleaños} placeholder="fechacumpleaños"/></center> 
        <center><label>Pasatiempo</label></center> 
        <center><input onChange={this.handleChange} type="pasatiempo" value={this.props.pasatiempo} placeholder="pasatiempo"/></center> 
        <center><input type="submit" value="Submit" /></center>
      
      </form>

    );
  }
}


export default App;
