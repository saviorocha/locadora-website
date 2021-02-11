import { Instancia } from '../instancia-filme/instancia-filme.model';

export interface Filme {
    id?: number;
    titulo: string,
    ano: number,
    diretores: string[],
    atores: string[],
    genero: string[],
    sinopse: string,
    // instancias: Instancia[]
}