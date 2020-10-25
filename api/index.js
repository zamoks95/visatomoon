var express = require("express");
var app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();

  app.options("*", (req, res) => {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});

app.use(express.static("public"));

app.listen(3003, () => {
  console.log("Server running on port 3003");
});

app.get("/sliderData", (req, res, next) => {
  let index = req.query.index;
  const sliderData = [
    {
      index: 0,
      bgImage: "assets/images/background.jpg",
      iconTrip: "assets/images/icon_rocket.png",
      logo: "assets/images/logo.png",
      imageRocket: "assets/images/rocket.png",
      title: "Visa to the Moon",
      subtitle: "Your trip start here",
      hash: "#moontrip #visamoon #moontickets",
      linkprev: "",
      linknext: "next",
      easeView: "view ease",
      headerImage: "assets/images/rock.jpg",
      backgroundMoon: "assets/images/background_moon.png",
      ctaText: "Start your trip >",
      ctaLink: "https://www.google.com",
    },
    {
      index: 1,
      bgImage: "https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2",
      iconTrip: "assets/images/icon_rocket.png",
      logo: "assets/images/logo.png",
      imageRocket: "https://images.unsplash.com/photo-1541873676-a18131494184",
      title: "This is the Moon",
      subtitle: "Get ready for the trip",
      hash: "#check #ignition #liftOff",
      linkprev: "prev",
      linknext: "next",
      easeView: "view ease",
      headerImage: "assets/images/rock.jpg",
      backgroundMoon: "assets/images/background_moon.png",
      ctaText: "Apollo 11 launch >",
      ctaLink:
        "https://www.youtube.com/watch?v=S3ufJ7lcr08&ab_channel=BBCAmerica",
    },
    {
      index: 2,
      bgImage: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2",
      iconTrip: "assets/images/icon_rocket.png",
      logo: "assets/images/sergi.png",
      imageRocket: "assets/images/ZAMO.jpg",
      title: "Sergi Zamora",
      subtitle: "Contact me!",
      hash: "635084481 sergi.zamora.95@gmail.com",
      linkprev: "prev",
      linknext: "",
      easeView: "view ease",
      headerImage: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc",
      backgroundMoon: "assets/images/background_moon.png",
      ctaText: "My Website",
      ctaLink: "https://sergizamora.com/",
    },
  ];
  res.setHeader("Content-Type", "application/json");
  setTimeout(() => {
    res.end(JSON.stringify(sliderData[index]));
  }, 250);
});
