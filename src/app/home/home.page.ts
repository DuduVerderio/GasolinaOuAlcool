import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  precoAlcool = ""
  precoGasolina = ""
  public resultado: String = ""

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(){
    this.resultado = ""
  }

  calcular(){

    if(this.precoAlcool && this.precoGasolina){

      let pAlcool = parseFloat(this.precoAlcool)
      let pGasolina = parseFloat(this.precoGasolina)
      let res = pAlcool / pGasolina

      if(res >= 0.7){
        this.resultado = "É melhor utilizar Gasolina!"
      }
      else{
        this.resultado = "É melhor utilizar Álcool!"
      }
    }
    else{
      this.resultado = "Os campos não foram preenchidos corretamente"
    }

    this.cdRef.detectChanges();
  }

}
