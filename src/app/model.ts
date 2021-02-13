export class Users {    
    constructor(public id?: any,
        public name?: String,
        public email?: String,
        public role?: String){}    
}

export class Projects {    
    constructor(public id?: any,
        public totalInvestment?: number,
        public description?: String,
        financials?:[],
        public experience?: String){}
         
}


export interface Product {
  id: number;
  productName: string;
  productCode: string;
  status: string;
  financials?: string[];
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}