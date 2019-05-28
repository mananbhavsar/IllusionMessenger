import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  @Input() numStars: number = 5;
  @Input() readOnly: boolean = true;
  @Input() value: number;

  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  stars: any = [];

  constructor() {    
    setTimeout(() => {
    this.calc();
    }, 1000);
  }

  calc() {
    this.stars = [];
    let tmp = this.value;
    for (let i = 0; i < this.numStars; i++ , tmp--)
      if (tmp >= 1)
        this.stars.push("star");
      else if (tmp < 1 && tmp > 0)
        this.stars.push("star-half");
      else
        this.stars.push("star-outline");
  }

  // getColor(index: number) {
	// 	enum COLORS {
	// 		GREY = "#E0E0E0",
	// 		GREEN = "#76FF03",
	// 		YELLOW = "#FFCA28",
	// 		RED = "#DD2C00",
	// 	}
	// 	if (this.isAboveRating(index)) {
	// 		return COLORS.GREY;
  //   }
  //   this.value = index + 1;
	// 	switch (this.value) {      
	// 		case 1:
	// 		case 2:
	// 			return COLORS.RED;
	// 		case 3:
	// 			return COLORS.YELLOW;
	// 		case 4:
	// 		case 5:
	// 			return COLORS.GREEN;
	// 		default:
	// 			return COLORS.GREY;
	// 	}
	// }

	isAboveRating(index: number): boolean {
		return index > this.value;
	}

  starClicked(index) {
    if (!this.readOnly) {
      this.value = index + 1;
      this.calc();
      this.clicked.emit(this.value);
    }
  }

}
