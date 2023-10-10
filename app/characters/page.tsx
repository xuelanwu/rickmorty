"use client";

import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

import styles from "./page.module.css";

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharactersPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ul className={styles.list}>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard name={character.name} image={character.image} />
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CharactersPage;
