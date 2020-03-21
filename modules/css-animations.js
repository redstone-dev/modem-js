import { ModemCore } from '../modem.js';

class Animation extends ModemCore {
	constructor(name, css){
		this.Name = "CSSAnimation (extension of CSSAnimator)";
		this.Version = 1;
		this.Description = "";
	}
}

class CSSAnimator extends Animation {
	constructor(){
		this.Name = "CSSAnimator";
		this.Version = 1;
		this.Description = "";
		this.createAnimation = createAnimation (el, name, css) => {
			let animation = new Animation(name, css);
			//document.getElementById(el).property
			// Still figuring something out :/
			// Maybe making this dependent on jQuery would help?
			// Wait, no, probably not, since it's not too lightweight.
		}
	}
}

