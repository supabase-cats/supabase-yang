import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Database } from '../../types/supabase';
import { sessionAtom } from '../../stores/AuthStore';
import { useAtomValue } from 'jotai';
import styles from './style';

const Idols = () => {
  const session = useAtomValue(sessionAtom);

  const [idolList, setIdolList] = useState<
    Database['public']['Tables']['IdolList']['Row'][] | null
  >([]);

  useEffect(() => {
    getIdolList();
  }, []);

  async function getIdolList() {
    const { data } = await supabase.from('IdolList').select();
    setIdolList(data);
  }

  return (
    <div>
      <h1>Idols</h1>
      {session ? (
        <ul>
          {idolList?.map((idol) => {
            return (
              <li key={idol.id}>
                <p>{idol.name}</p>
                <img
                  src={idol.profilePicture}
                  alt={`${idol.name} picture`}
                  css={styles.idolpicture}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>login please</h1>
      )}
    </div>
  );
};
export default Idols;
