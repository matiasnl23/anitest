import { ElementType } from '../enums/element-type.enum';

export interface SearchQueryParams {
    q?: string;
    page?: number;
    type?: ElementType;
    status?: any;
    rated?: any;
    genre?: any;
    score?: number;
    start_date?: string;
    end_date?: string;
    genre_exclude?: boolean;
    limit?: number;
    order_by?: any;
    sort?: any;
    producer?: number;
    magazine?: number;
    letter?: string;
}

export interface SearchAnimeResult {
    mal_id: number;
    url: string;
    image_url: string;
    title: string;
    airing: boolean;
    synopsis: string;
    type: string;
    episodes: number | null;
    score: number | null;
    start_date: string | null;
    end_date: string | null;
    members: number | null;
    rated: string | null;
}