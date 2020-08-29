export interface JikanResponse<T> {
    request_hash: string;
    request_cached: boolean;
    request_cached_expiry: number;
    results: T[];
}