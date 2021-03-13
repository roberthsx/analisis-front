import { MediaCantos } from "./media-cantos";
import { MediaCompeticao } from "./media-competicao";
import { MediaGols } from "./media-gols";

export class AnaliseRodada {
    
    idCompeticao: number;
    idTimeCasa: number;
    idTimeFora: number;
    TimeCasa: string;
    TimeFora: string;

    lstCantoMediaCantos:MediaCantos[];
    lstGolMediaGols:MediaGols[];
}
