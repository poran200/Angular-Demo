import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit ,OnDestroy{
  @Output() close = new EventEmitter()
  constructor(private ele: ElementRef) { }

  ngOnInit(): void {
    document.body.append(this.ele.nativeElement)
  }
  ngOnDestroy() {
    this.ele.nativeElement.remove();
  }

  closeModal():void {
    this.close.emit()
  }

}
