import Button from "@mui/material/Button";
import { Settings, Add } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="otherColor"
        size="small"
      >
        Contained
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add New Post
      </Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h1" component="p">
        It,s uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another</BlueButton>
    </div>
  );
}

export default App;
