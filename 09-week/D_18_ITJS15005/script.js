console.log(db);

db.collection("movies")
  .doc("fightClub")
  .set({
    director: { name_R: "David", surname: "Fincher" },
    genres: ["drama", "mind-bending"],
    name: "Fight Club",
    rating: 8.8,
    release_year: 1999,
  });

db.collection("movies")
  .doc("inception")
  .set({
    director: { name_R: "Christopher", surname: "Nolan" },
    genres: ["action", "sci-fi", "adventure"],
    name: "Inception",
    rating: 8.9,
    release_year: 2010,
  });

db.collection("movies")
  .doc("seven")
  .set({
    director: { name_R: "David", surname: "Fincher" },
    genres: ["drama", "crime", "mistery"],
    name: "Se7en",
    rating: 8.6,
    release_year: 1995,
  })
  .then(() => {
    console.log(`Film dodat!`);
    return db
      .collection("movies")
      .doc("seven")
      .update({
        genres: firebase.firestore.FieldValue.arrayRemove("drama"),
      })
      .then(() => {
        console.log(`Uspesno izbrisan zanr!`);
      });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("movies")
  .doc("memento")
  .set({
    director: { name_R: "Christopher", surname: "Nolan" },
    genres: ["mistery", "thriller"],
    name: "Memento",
    rating: 8.4,
    release_year: 2000,
  })
  .then(() => {
    console.log(`Film dodat!`);
    return db
      .collection("movies")
      .doc("memento")
      .update({
        genres: firebase.firestore.FieldValue.arrayUnion("mind-bending"),
      });
  })
  .then(() => {
    console.log(`Uspesno dodat zanr!`);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(1);
