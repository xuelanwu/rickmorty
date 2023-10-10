"use client";

import { useEffect, useState } from "react";

import { Character, getCharacters } from "../APIs/characters";

import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

import styles from "./page.module.css";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCharacters(currentPage);
        if (result !== undefined) {
          const { characters, totalPages } = result;
          setCharacters(characters);
          setTotalPages(totalPages);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
