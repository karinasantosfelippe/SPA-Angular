import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[spaFor]'
})
export class ForDirective implements OnInit {

  @Input('spaForEm') numbers: number []

  constructor() {

  }

  ngOnInit(): void{

  }

}
