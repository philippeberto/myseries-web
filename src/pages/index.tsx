import type { NextPage } from "next";
import { Box, Grid, TextField } from "@mui/material";
import useSWR from "swr";
import MediaCard from "../components/MediaCard";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const [title, setTitle] = useState("");
  const { data, error } = useSWR(`/api/imdb/imdbId?title=${title}`, fetcher);

  function handleChange(event: any) {
    setTimeout(() => {
      setTitle(event.target.value);
    }, 1000);
  }

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="type a title..."
        variant="outlined"
        onChange={handleChange}
      />
      <div>
        {data && data.date && <p>{data.date}</p>}

        {data && data.results && data.results.Error && (
          <p>Nenhum título encontrado</p>
        )}

        <Grid container spacing={2}>
          {data &&
            data.results &&
            data.results.Search &&
            data.results.Search.map((item: any) => {
              return (
                <Grid item xs={3}>
                  <MediaCard
                    urlImage={item.Poster}
                    title={item.Title}
                    year={item.Year}
                  />
                </Grid>
              );
            })}
        </Grid>
        {data && data.results && data.results.Search && (
          <p>{JSON.stringify(data.results.Search, null, 2)}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
