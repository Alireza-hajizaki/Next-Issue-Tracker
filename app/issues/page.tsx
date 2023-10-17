import { Flex, Text, Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <Flex direction="column" gap="4">
      <Text>Hello from Radix Themes :)</Text>
      <div><Button><Link href='/issues/new'>New Issue</Link></Button></div>
    </Flex>
  );
};

export default IssuesPage;
