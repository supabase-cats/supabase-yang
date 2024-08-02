import { supabase } from '../supabaseClient';
import IdolList from './IdolList';
import { Flex, Button } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import AddIdolModal from './AddIdolModal';
import { useState } from 'react';

interface Idol {
  id: string;
  group: string;
  name: string;
  gender: string;
  profilePicture: string;
}

const IdolListPage = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const fetchIdol = async () => {
    const { data, error } = await supabase
      .from('IdolList')
      .select('*')
      .order('name', { ascending: false })
      .range((page - 1) * itemsPerPage, page * itemsPerPage - 1);

    if (error) throw error;
    return data;
  };

  const {
    data: idol,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['idol', page],
    queryFn: fetchIdol,
  });

  const loadNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Flex justify="center" mb="4" gap="3">
        <Button onClick={() => supabase.auth.signOut()}>Sign Out</Button>
        <AddIdolModal />
      </Flex>
      <Flex direction="column" gap="2">
        {idol &&
          idol.map((idol: Idol) => (
            <IdolList
              key={idol.id}
              group={idol.group}
              name={idol.name}
              gender={idol.gender}
              avatar={idol.profilePicture}
            />
          ))}
      </Flex>
      {idol && idol.length === itemsPerPage && (
        <Button onClick={loadNextPage}>다음 페이지 로드</Button>
      )}
    </>
  );
};
export default IdolListPage;
