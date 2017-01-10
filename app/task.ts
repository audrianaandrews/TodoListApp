export class Task {
	public task: string;
	public inputHidden: boolean;
	public textHidden: boolean;

	constructor(task: string) {
		this.task = task;
		this.inputHidden = true;
		this.textHidden = false;
	}
	toggle() {
		this.textHidden = !this.textHidden;
		this.inputHidden = !this.inputHidden;
	}
}
