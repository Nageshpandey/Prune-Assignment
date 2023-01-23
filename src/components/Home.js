import React from "react";
import {
  Toolbar,
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar
        style={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", fontSize: "24px" }}>
          Home
        </div>
        <Button
          style={{
            background: "white",
            color: "black",
            padding: "10px 20px",
            borderRadius: "20px",
            "&:hover": {
              background: "#FF8E53",
            },
          }}
          onClick={() => navigate("login")}
        >
          Login
        </Button>
      </Toolbar>
      <Grid container spacing={3} style={{ marginTop: "50px" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Welcome to Movie Hub!
          </Typography>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Discover Any TV show poster, name, summary, type, language,
            genres, status, and schedule.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              image="https://images.unsplash.com/photo-1524481905007-ea072534b820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkyMjkzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              style={{ height: "250px" }}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
