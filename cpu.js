var CPU = function(spec){
	this.vendor = "china";
	this.Hz = spec.Hz || 5;
}

CPU.prototype.run = function(){
    this.heart = setInterval(this.cycle.bind(this), 1000);
}

CPU.prototype.stop = function(){
	if(this.heart){
		clearInterval(this.heart);
		this.heart = null;
	}
}

CPU.prototype.cycle = function(){
	var count = this.Hz;
	while(count--){
	    console.log('executing instruction...');
	}
}