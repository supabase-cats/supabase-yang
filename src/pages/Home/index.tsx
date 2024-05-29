import Greet from '../../components/Greet';
import Idols from '../../components/Idols';
import styles from './style';

const Home = () => {
  return (
    <div css={styles.main}>
      <Greet />
      <Idols />
    </div>
  );
};

export default Home;
