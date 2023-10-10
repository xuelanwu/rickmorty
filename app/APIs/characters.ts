export interface Character {
  id: number;
  name: string;
  image: string;
}

interface ApiResponse {
  results: Character[];
  info: {
    pages: number;
  };
}

export const getCharacters = async (page: number) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data: ApiResponse = await res.json();
    return {
      characters: data.results,
      totalPages: data.info.pages,
    };
  } catch (error) {
    console.log(error as Error);
  }
};
