import {
  DataList,
  Flex,
  Code,
  IconButton,
  Link,
  Container,
  Avatar,
} from '@radix-ui/themes';
import { supabase } from '../supabaseClient';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const IdolList = ({
  group,
  name,
  gender,
  avatar,
}: {
  group: string;
  name: string;
  gender: string;
  avatar: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [idolUpdateInfo, setIdolUpdateInfo] = useState({
    group,
    name,
    gender,
  });

  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: async (updatedInfo: typeof idolUpdateInfo) => {
      const { error } = await supabase
        .from('IdolList')
        .update(updatedInfo)
        .eq('name', name);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['idol'] });
      setIsEditing(false);
    },
    onError: (error) => {
      console.error('아이돌 수정 중 오류 발생:', error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('IdolList')
        .delete()
        .eq('name', name);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['idol'] });
    },
    onError: (error) => {
      console.error('아이돌 삭제 중 오류 발생:', error);
    },
  });

  const handleDelete = async () => {
    deleteMutation.mutate();
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIdolUpdateInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateMutation.mutate(idolUpdateInfo);
    }
  };

  return (
    <Container>
      <DataList.Root className="border p-4 rounded-md relative">
        <DataList.Item>
          <DataList.Label minWidth="88px">Group</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              {isEditing ? (
                <input
                  type="text"
                  value={idolUpdateInfo.group}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  name="group"
                />
              ) : (
                <Code variant="ghost">{group}</Code>
              )}
              <IconButton
                size="1"
                aria-label="Copy value"
                color="gray"
                variant="ghost"
              ></IconButton>
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Name</DataList.Label>
          <DataList.Value>
            {isEditing ? (
              <input
                type="text"
                value={idolUpdateInfo.name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                name="name"
              />
            ) : (
              name
            )}
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Gender</DataList.Label>
          <DataList.Value>
            {isEditing ? (
              <input
                type="text"
                value={idolUpdateInfo.gender}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                name="gender"
              />
            ) : (
              <Link href="mailto:vlad@workos.com">{gender}</Link>
            )}
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Avatar</DataList.Label>
          <DataList.Value>
            <Avatar src={avatar} fallback="Idol" />
          </DataList.Value>
        </DataList.Item>
        <div
          className="absolute top-4 right-8 cursor-pointer"
          onClick={handleUpdate}
        >
          <p>수정하기</p>
        </div>
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={handleDelete}
        >
          x
        </div>
      </DataList.Root>
    </Container>
  );
};
export default IdolList;
