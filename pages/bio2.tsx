import { useState } from "react";
import { Box, Divider, Flex, Header, Problem, Solution, SolutionSkeleton, Spacer, Text } from "components";
import { bio2Problems, pages, ProblemInfo } from "content";

export default function BIO2() {
  const [problem, setProblem] = useState<ProblemInfo | null>(null);

  return (
    <>
      <Header page={pages.bio2} />
      <Flex
          as="main"
          overflow="auto"
          maxWidth="100%"
          px={5}
          py={2}
          justifyContent="center"
        >
        <Box width="4xl">
          <Text typography="display.small">About</Text>
          <Text typography="body.medium">
            These problems are all available on the online grader given to you after receiving
            an invitation to the BIO Finals. To respect the organisers&apos; wishes, we will not provide a grader
            here, but we will provide editorials and AC solutions.
          </Text>
          <Divider mb={3} mt={3} />
          <Text typography="display.small">Problems</Text>
          <Spacer m={2} />
          <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap="1em">
            {
              ...bio2Problems.map((problem) => {
                return (
                  <Box display="flex" key={problem.display}>
                    <Problem problem={problem} onChoose={() => setProblem(problem)} />
                  </Box>
                );
              })
            }
          </Box>
          <Divider mb={3} mt={6} />
          <Text typography="display.small">Problem Viewer{problem && `: ${problem.display}`}</Text>
          {
            problem === null ? <SolutionSkeleton /> : <Solution problem={problem} />
          }
          <Spacer mt={6} p={6} />
        </Box>
      </Flex>
    </>
  );
}
