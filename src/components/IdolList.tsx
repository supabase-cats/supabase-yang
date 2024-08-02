import {
  DataList,
  Flex,
  Code,
  IconButton,
  Link,
  Container,
  Avatar,
} from '@radix-ui/themes';

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
  return (
    <Container>
      <DataList.Root className="border p-4 rounded-md">
        <DataList.Item>
          <DataList.Label minWidth="88px">Group</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <Code variant="ghost">{group}</Code>
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
          <DataList.Value>{name}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Gender</DataList.Label>
          <DataList.Value>
            <Link href="mailto:vlad@workos.com">{gender}</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Avatar</DataList.Label>
          <DataList.Value>
            <Avatar src={avatar} fallback="Idol" />
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Container>
  );
};
export default IdolList;
