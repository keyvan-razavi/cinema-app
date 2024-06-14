let MOVIES = [
  {
    id: "01",
    title: "One flew over the cuckoo's nest",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    dateAndTime: "12am - Sep 01 2024 ",
    room: "blue",
  },
  {
    id: "02",
    title: "Shining",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    dateAndTime: "2pm - Sep 01 2024 ",
    room: "red",
  },
  {
    id: "03",
    title: "Sacrifice",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
    dateAndTime: "4:30pm - Sep 01 2024 ",
    room: "green",
  },
  {
    id: "04",
    title: "Wild strawberries",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
    dateAndTime: "7:00pm - Sep 01 2024 ",
    room: "green",
  },
  {
    id: "05",
    title: "One flew over the cuckoo's nest",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    dateAndTime: "12am - Sep 01 2024 ",
    room: "blue",
  },
  {
    id: "06",
    title: "Shining",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    dateAndTime: "2pm - Sep 01 2024 ",
    room: "red",
  },
  {
    id: "07",
    title: "Sacrifice",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
    dateAndTime: "4:30pm - Sep 01 2024 ",
    room: "green",
  },
  {
    id: "08",
    title: "Wild strawberries",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
    dateAndTime: "7:00pm - Sep 01 2024 ",
    room: "green",
  },
  {
    id: "09",
    title: "One flew over the cuckoo's nest",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    dateAndTime: "12am - Sep 01 2024 ",
    room: "blue",
  },
  {
    id: "10",
    title: "Shining",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    dateAndTime: "2pm - Sep 01 2024 ",
    room: "red",
  },
  {
    id: "11",
    title: "Sacrifice",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
    dateAndTime: "4:30pm - Sep 01 2024 ",
    room: "green",
  },
  {
    id: "12",
    title: "Wild strawberries",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
    dateAndTime: "7:00pm - Sep 01 2024 ",
    room: "green",
  },
  {
    id: "13",
    title: "One flew over the cuckoo's nest",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    dateAndTime: "12am - Sep 01 2024 ",
    room: "blue",
  },
  {
    id: "14",
    title: "Shining",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    dateAndTime: "2pm - Sep 01 2024 ",
    room: "red",
  },
  {
    id: "15",
    title: "Sacrifice",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
    dateAndTime: "4:30pm - Sep 01 2024 ",
    room: "green",
  },
  {
    id: "16",
    title: "Wild strawberries",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
    dateAndTime: "7:00pm - Sep 01 2024 ",
    room: "green",
  },
];

exports.module = MOVIES;
