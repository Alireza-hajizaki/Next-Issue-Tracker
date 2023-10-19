import { Skeleton } from "@/app/components";
import { Box } from '@radix-ui/themes';

const NewIssueLoadingPage = () => {
  return (
    <Box className='max-w-2xl'>
      <Skeleton/>
      <Skeleton height='20rem' />
    </Box>
  )
}

export default NewIssueLoadingPage