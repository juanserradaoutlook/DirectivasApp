import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  public oscuroQueQuiero = '700';
  public mensaje = 'Mensaje por defecto (desde AgregarComponente)';
  public colorQueQuiero = 'green';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });
  
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError( campo: string): boolean{
    return (this.miFormulario.get(campo)?.invalid || false)
  }

  cambiarMensaje(){
    this.mensaje = Math.random().toString();
  }
  
  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.colorQueQuiero = color;
  }

}
