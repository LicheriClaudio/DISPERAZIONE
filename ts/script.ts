addEventListener("DOMContentLoaded",() =>{
let main = document.querySelector('#main');
if (main !== null) {}
let p = document.createElement('p') as HTMLElement
let cc = document.querySelector('#stampa') as HTMLElement
let stmp = document.createElement('div') as HTMLDivElement
stmp.className = 'ciccio'
if (stmp !== null && cc !== null) {
  cc.appendChild(stmp);

p.innerHTML = `Saldo:${smrt._Saldo.toFixed(2)}`;
  
  /* smrt.get_NumChiamate(); */
  /* ScalaSaldo(); */
    /* ricarica(); */
    /* chiama(); */
    }
});
/* let sec: number = 0;
let min: number = 0;
let hour: number = 0; */
let btn = document.querySelector("#call") as HTMLElement;
let btn2 = document.querySelector("#Ric") as HTMLElement;



/* function ScalaSaldo() {
  smrt.ScalaSaldo()
    console.log(smrt._Saldo)
  } */
  
  
  


/* abstract  */ class SmartPhone {
    private NumChiamate: number;
    private Saldo: number;
    public tempochiamata:number = 0
    public sec: number = 0;
    public min: number = 0;
    public tempo_chiamata:string 
    public stop : boolean = false
    
   
  constructor(_NumChiamate: number, _Saldo: number, ) {
    this.NumChiamate = _NumChiamate;
    this.Saldo = _Saldo
    this.tempo_chiamata ='0 0'
    
    
    
  }

  num_404 ():number{
    /* console.log(smrt.Saldo.toFixed(2));
    console.log(obj.Saldo.toFixed(2));
    console.log(obj1.Saldo.toFixed(2)); */
    
  return this.Saldo
  }
     get _NumChiamate(): number {

    return this.NumChiamate ;
  }

  num_chiamate():void {
    /* this.NumChiamate++ */
    if (this.NumChiamate === 5){
      this.NumChiamate = 0
      alert('CHIAMATE AZZERATE')
      console.log("Azzerachiamate:", smrt.NumChiamate);
    }
     
      
  }

  ricarica3(): number {
    this.Saldo += +5;
    console.log( 'saldo ricaricato:',smrt.Saldo.toFixed(2))
    alert(' CARICATI 5€')
    return this.Saldo
  }


  Timer(): any {
    console.log('Tempo:'+'Min:' + this.min + " "+ 'Sec:',this.sec);
    this.stop = true
    if (this.Saldo < 0.20)  {
      this.stopTimer();
      alert("CREDITO ESAURITO, Chiamata Terminata  RICARICA!");
    }if (this.Saldo >= 0.20) {
      
    this.ScalaSaldo()
    this.sec++;
    }if (this.sec >= 60) {
      this.sec = 0;
      this.min++;
    } else if (this.min >= 60) {
      this.min = 0;
    }
  }
stopTimer():void {
  this.stop =false
  clearInterval(this.tempochiamata);
  
  
    
}
  
  startTimer(): void {
    if (this.Saldo >= 0.20) {
      this.NumChiamate++;
    this.tempochiamata = setInterval(() => this.Timer(), 1000);
    /* return this.tempochiamata */
  }
    
  
  }

  get _Saldo(): number {
    return this.Saldo;
  }
  //SCALA SALDO
  ScalaSaldo():number {
    if (this.min >= 1) {
      
    
   this.Saldo -= 0.2
    
   }if (this.Saldo <= 0) {
      this.Saldo === 0  
    }
    
    console.log('Saldo.SMRT:',smrt.Saldo.toFixed(2));
    console.log("Saldo.OBJ:", obj.Saldo.toFixed(2));
    console.log("Saldo.OBJ1:", obj1.Saldo.toFixed(2));
    return this._Saldo
    
  }
  

  get _tempo_chiamata(): string {
    return this.sec + ' ' + this.min;
  }

  
  
}



  
  function num_404() {
  let inp = document.querySelector('#disp') as HTMLInputElement
  inp.value
    if (inp !== null) {
  if(inp.value === '404') {
     smrt.num_404
  }}
}

//-----------------------SMRT----------------
let smrt = new SmartPhone(0, 0.20, );

function ricarica() {
  smrt.ricarica3();
}
function chiama() {
  smrt.num_chiamate();
  smrt.startTimer();if (smrt._Saldo < 0.20) {
    smrt.stopTimer()
  }
  
  smrt._NumChiamate;
  if (smrt.sec > 20) {
    smrt.ScalaSaldo();
    
  } 
  console.log('SMRT:',smrt);
}





// --------------------------------------OBJ---------------------
let obj = new SmartPhone(0, 10, );

function ricarica1() {
  smrt.ricarica3();
}
function chiama1() {
  obj.num_chiamate();
  obj.startTimer();
  obj._NumChiamate;
  if (obj.sec > 20) {
    obj.ScalaSaldo();
   /*  console.log(obj._Saldo); */
  } 
  console.log('OBJ:',obj);
}
/* console.log(obj._NumChiamate); */
       





//--------------------OBJ1------------------------------

let obj1 = new SmartPhone(0, 5, );

function ricarica2() {
  smrt.ricarica3();
  console.log(obj1.ricarica3());
}
function chiama2() {
  obj1.num_chiamate();
  obj1.startTimer();
  /* console.log(obj1._NumChiamate); */
  /* console.log(smrt.tempochiamata) */
  obj1._NumChiamate;
  if (obj1.sec > 20) {
    obj1.ScalaSaldo();
    console.log(obj1._Saldo);
  }
  console.log('OBJ1:',obj1);
}




let utenti = ([] = [smrt, obj, obj1]);
/* console.log(smrt.tempo_chiamata) */
if(btn !== null){
/* btn.addEventListener('click',smrt.startTimer())
btn2.addEventListener('click',smrt.ricarica3 ) */
/* console.log(smrt.ricarica3) */
/* console.log(smrt.startTimer())} */}
/* console.log(smrt._Saldo) */

 
