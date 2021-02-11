import { Filme } from '../filme/filme.model';

export interface Instancia {
    id?: number,
    data_entrega: Date,
    filme: Filme
}