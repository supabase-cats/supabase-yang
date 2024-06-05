import { useAtomValue } from 'jotai';
import { AuthUser } from '../../components/AuthUser';
import Greet from '../../components/Greet';
import Idols from '../../components/Idols';
import styles from './style';
import { sessionAtom } from '../../stores/AuthStore';
import { supabase } from '../../supabaseClient';
import { useEffect, useState } from 'react';

const Home = () => {
  const session = useAtomValue(sessionAtom);
  const [userEmail, setUserEmail] = useState('');

  async function getUserEmail() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUserEmail(user?.email as string);
  }

  useEffect(() => {
    getUserEmail();
  }, []);

  return (
    <div css={styles.main}>
      {session ? <Greet name={userEmail} /> : <Greet />}
      <AuthUser />
      <Idols />
    </div>
  );
};

export default Home;
