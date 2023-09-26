import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { FooterButton } from 'src/app/models/footerButton.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() sendStep = new EventEmitter<any>();

  red: boolean = true;
  buttonList: Array<FooterButton> = [
    { name: 'quadrinhos', id: 1 },
    { name: 'eventos', id: 2 },
    { name: 'home', id: 3 },
    { name: 'criadores', id: 4 },
    { name: 'personagens', id: 5 },
  ];

  constructor() {
  }

  ngOnInit() {
    //this.selectButton(3);
  }

  ngAfterViewInit() {
    this.selectButton(3);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('show me the changes', changes);
  }

  goTo(item: FooterButton) {
    console.log('goTo clicado', item.name);
    this.sendStep.emit({
      event: event,
      footerStep: item.name
    });
    this.unselectButton();
    this.selectButton(item.id);
  }

  /** Remove a classe do botão selecionado */
  unselectButton() {
    this.buttonList.map( b => {
      document.getElementById(`${b.id}-footer`)?.classList.remove('selected');
    })
  }

  /** Adicionar a classe selected ao botão clicado */
  selectButton(idButton: number) {
    document.getElementById(`${idButton}-footer`)?.classList.add('selected');
  }
}
