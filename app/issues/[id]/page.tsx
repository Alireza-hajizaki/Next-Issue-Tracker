import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import IssueDetails from "./Issuedetails";
import EditIssueButton from "./EditIssueButton";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  // await delay(2000);

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
    <Box>
      <IssueDetails issue={issue}/>
    </Box>
    <Box>
      <EditIssueButton issueId={issue.id}/>
    </Box>
  </Grid>
  );
};

export default IssueDetailsPage;
