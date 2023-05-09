import { KBarResults, useMatches } from "kbar";
import ResultItem from "./ResultItem";
import { Box, Button } from "@mantine/core";
export default function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === "string" ? (
          <Box key={item} style={{ backgroundColor: "white", padding: "auto 10px" }}> <Button type="button" fullWidth variant="light" color="gray" uppercase>
            {item}
          </Button> </Box>
        ) : (
          <ResultItem key={item.id}
            action={item}
            active={active}
          />
        )
      }
      }
    />
  );
}
