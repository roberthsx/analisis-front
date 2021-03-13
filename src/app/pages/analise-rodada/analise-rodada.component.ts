import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AnaliseRodada } from 'src/app/models/analise-rodada';
import { Competicao } from 'src/app/models/competicao';
import { MediaCompeticao } from 'src/app/models/media-competicao';
import { AnaliseRodadaService } from 'src/app/services/analise-rodada.service';
import { CompeticaoService } from 'src/app/services/competicao.service';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-analise-rodada',
  templateUrl: './analise-rodada.component.html',
  styleUrls: ['./analise-rodada.component.css']
})
export class AnaliseRodadaComponent implements OnInit {

  public select: FormGroup;
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private analiseService:AnaliseRodadaService,
              private competicaoService:CompeticaoService,
              private formBuilder: FormBuilder,
              private calendar: NgbCalendar, 
              public formatter: NgbDateParserFormatter,
              private router: Router) { 
                this.fromDate = calendar.getToday();
                this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
              }

  ngOnInit(): void {
    this.select = new FormGroup({
      select: new FormControl()
    });

    this.loadCombo();
  }
  

   private analise : AnaliseRodada[]=null;
   private competicao : Competicao [];
   private mediaCompeticao : MediaCompeticao;
   private confrontosMedia :any;
   private confrontosCV :any;

  getAnaliseRodada( idCompeticao: number,dataInicio:string,dataFim:string) {
    this.analiseService.getAnalise(idCompeticao,dataInicio,dataFim).subscribe((analiseResponse: AnaliseRodada[]) => {
      console.log(analiseResponse);
      this.analise = analiseResponse;
    });
  }
  getMediasLiga( idCompeticao: number) {
    this.competicaoService.getCompeticoesMedias(idCompeticao).subscribe((mediasResponse: MediaCompeticao) => {
      console.log(mediasResponse);
      this.mediaCompeticao = mediasResponse;
    });
  }

  loadCombo(){
    this.competicaoService.getCompeticoes().subscribe((competicaoResponse: Competicao[]) => {
      this.competicao = competicaoResponse;
    });
  }

  setLiga(){
    this.select.setValue({
      select: this.select.get('select').value
    });
    
  }
  buscar(){
    //carrega tabela de rodada
    let dataInicioSend = this.fromDate.day+"/"+this.fromDate.month+"/"+this.fromDate.year
    let dataFimSend:string;
    if(this.toDate != null){
      dataFimSend = this.toDate.day+"/"+this.toDate.month+"/"+this.toDate.year
    }
    else{
      dataFimSend = dataInicioSend
    }
    
    console.log(dataInicioSend)
    console.log(dataFimSend)
    this.getMediasLiga((this.select.get('select').value as Competicao).idCompeticao);
    this.getAnaliseRodada((this.select.get('select').value as Competicao).idCompeticao,dataInicioSend,dataFimSend);
    
  }

  calculaMaior(A:number ,B: number ):boolean{
    if (A>B){
      return true;
    }
  }
  detalharConfronto($myParam: string = ''): void {
    const navigationDetails: string[] = ['/h2h'];
    //if($myParam.length) {
    //  navigationDetails.push($myParam);
    //}
    console.log($myParam)
    //this.router.navigate(navigationDetails);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}
