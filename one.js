class polygon_two_sides{
	
	constructor( _height , _weigth ) {
		
		this.height = _height ; 
		this.weigth = _weigth ; 
		
	}
	
	getArea(){
		
		return this.height * this.weigth ;
		
	}
	
}

var square = new polygon_two_sides(2,2);
console.log( square.getArea() );
