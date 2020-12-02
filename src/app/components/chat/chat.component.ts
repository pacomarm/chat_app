import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit{

  mensaje = '';
  elemento: any;

  constructor( public chatService: ChatService) {
    
    this.chatService.cargarMensajes().subscribe( () => {

      setTimeout( () => {

        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

    });
  }

  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje(){
    
    if( this.mensaje.length === 0 ){
      return;
    }
    
    this.chatService.agregarMensaje(this.mensaje)
      .then( () => this.mensaje = '' )
      .catch( (err) => console.log('error bro', err) )

  }

}
