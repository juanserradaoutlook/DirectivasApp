import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Campo Requerido (por Defecto desde Directiva)';

  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  }

  @Input() oscuro: string = '100';

  // @Input() mensaje: string = 'Campo requerido';
  @Input() set mensaje(valor: string){
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    } else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']){
    //   console.log(changes);
    //   const mensaje = changes['mensaje'].currentValue;
    //   console.log(mensaje);
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if (changes['color']) {
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }
    
  }
  
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setBold();
  }



  setColor(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setBold(): void {
    this.htmlElement.nativeElement.style.fontWeight = this.oscuro;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
