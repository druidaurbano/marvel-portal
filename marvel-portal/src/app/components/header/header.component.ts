import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OptionButton } from 'src/app/models/optionButton.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sendStep = new EventEmitter<any>();
  homeButton: OptionButton = { name: 'home', id: 9 };
  leftSlide: number = 0;

  buttonList: Array<OptionButton> = [
    { name: 'quadrinhos', id: 0 },
    { name: 'eventos', id: 1 },
    //{ name: 'home', id: 3 },
    { name: 'criadores', id: 2 },
    { name: 'personagens', id: 3 },
  ];

  constructor() {

  }

  ngOnInit() {

  }


  goTo(item: OptionButton) {
    console.log('goTo clicado', item.name);
    this.sendStep.emit({
      event: event,
      step: item.name
    });
    this.unselectButton();
    this.selectButton(item.id);
  }

  /** Remove a classe do botão selecionado */
  unselectButton() {
    this.buttonList.map( b => {
      document.getElementById(`${b.id}-header`)?.classList.remove('selected');
    })
  }

  /** Adicionar a classe selected ao botão clicado */
  selectButton(idButton: number) {
    if(idButton === 9) {
      document.getElementById('slide')?.classList.remove('selected');
      return;
    }
    document.getElementById(`${idButton}-header`)?.classList.add('selected');
    let mySlide = document.getElementById('slide');
    mySlide?.classList.add('selected');
    this.leftSlide = idButton * 25;
  }
}
