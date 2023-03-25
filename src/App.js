import "./App.css";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import Expense from "./components/data";

function App() {
  // let total = 0;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log("error in fetching"));
  }, []);

  return (
    <div 
      className="App"
      style={{ textAlign: "center", width: "500px", margin: "auto" }}
    >
      {posts.map((post) => (
        <Card onClick={(event) => {
          alert("You clicked " + post.title);
        }} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
            >
              {post.title}
            </Typography>

            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {post.body}
            </Typography>
            {/* <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">View Details</Button>
          </CardActions>
          
        </Card>
      ))}
    </div>
  );
}

export default App;
