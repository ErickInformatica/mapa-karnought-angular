import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TestService]
})
export class AppComponent {
  title = 'mapa-karnought-angular';
  public opeModel ={
    operacion: ''
  }
  public resultadosfirstRow = []
  public resultadosSecondRow = []
  public firstRow = ['000', '001', '011', '010'];
  public secondRow = ['100', '101', '111', '110'];

  public firstRow4Col = ['0000', '0001', '0011', '0010'];
  public secondRow4Col = ['0100', '0101', '0111', '0110'];
  public thirdRow4Col = ['1100', '1101', '1111', '1110'];
  public fourthRow4Col = ['1000', '1001', '1011', '1010'];
  public resultadosfirstRow4Col = []
  public resultadosSecondRow4Col = []
  public resultadosthirdRow4Col = []
  public resultadosfourthRow4Col = []

  public resultOperacion;

  constructor(
    private _testService: TestService
  ){}

  rowCreate(arrayRow, arrayNode, arrayResultados){
    for (let x = 0; x < arrayRow.length; x++) {
      let seEncontro = false;
      for (let s = 0; s < arrayNode.length; s++) {
        if(arrayNode[s] === arrayRow[x]){
          seEncontro = true;
          break
        }
      }
      if(seEncontro){
        arrayResultados.push(1)
      }else{
        arrayResultados.push(0)
      }
    }

  }

  operation(){
    this._testService.operation(this.opeModel).subscribe(
      response => {
        if(response.rows === 3){
          this.resultadosfirstRow = [];
          this.resultadosSecondRow = [];
          this.resultadosfirstRow4Col = [];
          this.resultadosSecondRow4Col = [];
          this.resultadosthirdRow4Col = [];
          this.resultadosfourthRow4Col = [];
          this.resultOperacion = response.result;
          this.rowCreate(this.firstRow, this.resultOperacion, this.resultadosfirstRow);
          this.rowCreate(this.secondRow, this.resultOperacion, this.resultadosSecondRow);
        } else if(response.rows === 4){
          this.resultadosfirstRow = [];
          this.resultadosSecondRow = [];
          this.resultadosfirstRow4Col = [];
          this.resultadosSecondRow4Col = [];
          this.resultadosthirdRow4Col = [];
          this.resultadosfourthRow4Col = [];
          this.resultOperacion = response.result;
          this.rowCreate(this.firstRow4Col, this.resultOperacion, this.resultadosfirstRow4Col);
          this.rowCreate(this.secondRow4Col, this.resultOperacion, this.resultadosSecondRow4Col);
          this.rowCreate(this.thirdRow4Col, this.resultOperacion, this.resultadosthirdRow4Col);
          this.rowCreate(this.fourthRow4Col, this.resultOperacion, this.resultadosfourthRow4Col);

        }


      }
    )
  }
}
