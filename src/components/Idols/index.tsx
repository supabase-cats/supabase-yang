import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Database } from '../../types/supabase';

const Idols = () => {
  const [idolList, setIdolList] = useState<
    Database['public']['Tables']['IdolList']['Row'][] | null
  >([]);

  useEffect(() => {
    getIdolList();
  }, []);

  async function getIdolList() {
    console.time('fetch 타임 측정');
    const { data } = await supabase.from('IdolList').select();
    setIdolList(data);
    console.timeEnd('fetch 타임 측정');
  }

  return (
    <div>
      <h1>Idols</h1>
      <ul>
        {idolList?.map((idol) => {
          return <li key={idol.id}>{idol.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default Idols;
