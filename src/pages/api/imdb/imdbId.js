// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getBySearch } from "../../../utils/http";
import axios from "axios";

const url = "https://movie-database-imdb-alternative.p.rapidapi.com/";

export default async function fromGetBySearch(req, res) {
  console.log(req.query);
  const dinamicDate = new Date();
  const options = getBySearch(req.query.title);
  try {
    const { data } = await axios.get(url, options);
    res.setHeader("Cache-Control", "s-maxage=604800, stale-while-revalidate");
    res.status(200).json({
      date: dinamicDate.toUTCString(),
      results: data,
    });
  } catch (error) {
    console.log(error);
  }
}
