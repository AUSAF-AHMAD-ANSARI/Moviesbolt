import axios from "axios";

const instance = axios.create({

baseURL: 'https://api.themoviedb.org/3/',
headers:{
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjk5YTRlZjU2NTY5MTNiYjZjMzA4NGQ5YzE1MDQ1NiIsIm5iZiI6MTcxOTU3MTg2OC41Nzg3OSwic3ViIjoiNjY3ZTkzYmE1YTYwM2U0OTQwYzZlMjQxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6Rd7SSsWPYBYUcR3kdqA6XbPvQlJeH_uok-iusikKHw',
    accept:"application/json"



},

});

export default instance;