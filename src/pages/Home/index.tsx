import { AuthUser } from '../../components/AuthUser';
import Greet from '../../components/Greet';
import Idols from '../../components/Idols';
import styles from './style';

const Home = () => {
  return (
    <div css={styles.main}>
      <Greet />
      <AuthUser />
      <Idols />
    </div>
  );
};

export default Home;
