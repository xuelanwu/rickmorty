import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  name: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name}></img>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CharacterCard;
