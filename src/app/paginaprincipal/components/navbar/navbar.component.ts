import { Component, EventEmitter, Input, OnInit,ViewChild, ElementRef, Renderer2,HostListener, Output } from '@angular/core';
import { MenuItem } from '../../interface/paginaprincipal.interfaces';
import { QxService } from '../../services/qxprueba.service';
import { retry } from 'rxjs';


@Component({
  selector: 'pagina-principal-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent implements OnInit{

  @Output()
  public nombreSeccion: EventEmitter<string> = new EventEmitter();

  @ViewChild('sidebar',{static : true}) sidebar!: ElementRef ;


  constructor(private QxService : QxService, private renderer: Renderer2){}
  public menuIsActive : boolean = true;



@HostListener('document:click', ['$event'])
closeSidebar(event : Event){
  const clickDentroDelSidebar = this.sidebar.nativeElement.contains(event.target);
  console.log(clickDentroDelSidebar)
  if(!clickDentroDelSidebar && !this.sidebar!.nativeElement.classList.contains('close')){
    this.toggleSidebar()
  }
}

get menuItems():MenuItem[]{
  return this.QxService.menuItems
}

setNombreSeccion(nombre : string, idSeccion : number){
  switch(idSeccion){
    case 1:
      this.QxService.searchEmpresa(nombre)
      break;
    case 2 :
      this.QxService.searchArticulo(nombre)
      break;
  }
  this.nombreSeccion.emit(nombre)
}

toggleSidebar(){
  if(this.sidebar!.nativeElement.classList.contains('close')){
    this.renderer.removeClass(this.sidebar!.nativeElement, 'close');
    this.renderer.addClass(this.sidebar!.nativeElement, 'sidebar');
    this.menuIsActive = true;
  }else{
    this.renderer.addClass(this.sidebar!.nativeElement, 'close');
    this.menuIsActive = false;
  }
  this.closeAllSubMenus();

}

toggleSubMenu(event : Event): void{
  if(this.sidebar!.nativeElement.classList.contains('close')) return
  const button = event.currentTarget as HTMLElement;
  const submenu = button.nextElementSibling as HTMLElement;
  const span = button.querySelectorAll('span')
   if (span[1]) {
    span[1].style.color = '#119fe8';
  }
  if(!button.nextElementSibling!.classList.contains('show')){
    this.closeAllSubMenus()
  }

    submenu.classList.toggle('show')
}

closeAllSubMenus(){
  const submenus = this.sidebar.nativeElement.getElementsByClassName('show');
  for (const submenu of Array.from(submenus)as HTMLElement[]){
    this.renderer.removeClass(submenu, 'show');
  }

}

ngOnInit(){
  this.toggleSidebar()
}
}

