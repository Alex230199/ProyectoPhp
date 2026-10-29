import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-twinteach',
  styleUrl: './twinteach.css',
  templateUrl: './twinteach.html',
})
export class Twinteach {
  private readonly checklist = [false, false, false, false];
	private readonly expandedSteps = [true, false, false, false];

  get completedSteps(): number {
    return this.checklist.filter(Boolean).length;
  }

  isStepComplete(index: number): boolean {
    return this.checklist[index];
  }

  isStepOpen(index: number): boolean {
		return this.expandedSteps[index];
	}

  toggleStepOpen(index: number): void {
		this.expandedSteps[index] = !this.expandedSteps[index];
	}

  toggleStepComplete(index: number): void {
		this.checklist[index] = !this.checklist[index];
  }
}
