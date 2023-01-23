import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  searchContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },
  searchInput: {
    flex: 1,
    marginRight: "20px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    width: "300px",
    margin: "20px",
    padding: "20px",
    boxShadow: "0px 0px 10px #ccc",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 0px 20px #ccc",
    },
  },
  cardMedia: {
    height: "200px",
  },
  cardContent: {
    padding: "20px",
  },
});

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const handleSearch = () => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => {
        if (res.data.length === 0) {
          alert("No results found");
        } else {
          setShows(res.data);
        }
      })
      .catch((err) => {
        alert("Error retrieving search results");
      });
  };

  return (
    <div>
      <div className={classes.searchContainer}>
        <TextField
          className={classes.searchInput}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          label="Search for TV shows"
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className={classes.cardContainer}>
        {shows.map((show) => (
          <Card key={show.show.id} className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={show.show.image ? show.show.image.medium : ""}
              title={show.show.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {show.show.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               <b> Summary: </b> {show.show.summary}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              <b> Type: </b> {show.show.type}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              <b> Language:</b> {show.show.language}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              <b> Genres:</b> {show.show.genres.join(", ")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              <b> Status:</b> {show.show.status}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              <b> Schedule:</b> {show.show.schedule.time} on{" "}
                {show.show.schedule.days.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Search;
