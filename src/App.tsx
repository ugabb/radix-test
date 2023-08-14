import * as Switch from "@radix-ui/react-switch";
import { Grid } from '@radix-ui/react-grid';
import { Box } from '@radix-ui/react-box';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-full">
      <h1 className="text-4xl">Radix</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          className="Label"
          htmlFor="airplane-mode"
          style={{ paddingRight: 15 }}
        >
          Airplane mode
        </label>
        <Switch.Root className="SwitchRoot" id="airplane-mode">
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>

        <Grid columns="3" gap="3" width="auto">
          <Box height="9">
            <h1>works</h1>
          </Box>
          <Box height="9">
            <h1>works</h1>
          </Box>
          <Box height="9">
            <h1>works</h1>
          </Box>
          <Box height="9">
            <h1>works</h1>
          </Box>
          <Box height="9">
            <h1>works</h1>
          </Box>
          <Box height="9">
            <h1>works</h1>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

export default App;
