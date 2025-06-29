export type TrendList = {
    page: number,
    results: {
        adult: boolean,
    backdrop_path: string,
    id: number,
      name: string,
      original_name: string,
      overview:  string,
      poster_path: string,
      media_type: string,
      original_language: string,
      genre_ids: [
        number,
        number,
        number
      ],
      popularity: number,
      first_air_date: string,
      vote_average: number,
      vote_count: number,
      origin_country: [
        string
      ]
    }[],
    total_pages: number,
    total_results: number
}

