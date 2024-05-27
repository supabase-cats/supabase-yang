import Greet from '../../components/Greet';
import styles from './style';

const Home = () => {
  return (
    <div css={styles.main}>
      <Greet />
    </div>
  );
};

export default Home;
