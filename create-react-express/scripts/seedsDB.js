const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Fire Bringer",
    author: "David Clement-Davies",
    description:
      "David Clement-Davies’s first novel was published to great acclaim, including a rave review from Watership Down author richard Adams: “it is a riveting story and deserves to be widely read. it is one of the best anthropomorphic fantasies known to me.”",
    image:
      "https://books.google.com/books?id=-O5QvflYlqMC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false",
    link:
      "https://books.google.com/books?id=-O5QvflYlqMC&source=gbs_slider_cls_metadata_8_mylibrary"
  },
  {
    title: "Matched",
    author: "Ally Condie",
    description:
      "Cassia has always trusted the Society to make the right choices for her: what to read, what to watch, what to believe. So when Xander's face appears on-screen at her Matching ceremony, Cassia knows with complete certainty that he is her ideal mate ... until she sees Ky Markham's face flash for an instant before the screen fades to black. The Society tells her it's a glitch, a rare malfunction, and that she should focus on the happy life she's destined to lead with Xander",
    image:
      "https://books.google.com/books/content?id=GZZHeuRtVaQC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71GtzbhLfAWnZpIM7NNEtBmrlF82HJ2Ri1w3dmkYOD3ywgsDxZbhkvhSpnP-olKWboQYe61q67y11CEjp66ENJLf_u_zDROLxnQhzV7lQISCmidnMbVd4Wt91sKqTnOyuoeb0SR",
    link:
      "https://books.google.com/books?id=GZZHeuRtVaQC&source=gbs_slider_cls_metadata_8_mylibrary"
  },
  {
    title: "Death of a Salesman",
    author: "Arthur Miller",
    description:
      "The play shows a series of chronological events which take place during one evening and the next day. At intervals throughout the play we see scenes from Willy's past enacted on the same stage set at the same time. On first consideration this seems more likely to confuse than reveal, but Miller had very strong reasons for staging the play in this way. Miller believes that the past is not something which is now behind us ... he says the past is with us all the time, informing and influencing our actions and choices. If we are to understand Willy, we must be aware of the emotional burdens and the formative influences which he carries with him from the past.",
    image:
      "https://books.google.com/books?id=VmJa4tLn0vMC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false",
    link:
      "https://books.google.com/books?id=VmJa4tLn0vMC&source=gbs_slider_cls_metadata_8_mylibrary"
  },
  {
    title: "Wise Child",
    author: "Monica Furlong",
    description:
      "Abandoned by both her parents, nine-year-old Wise Child goes to live with the witch woman Juniper, who begins to train her in the ways of herbs and magic.",
    image:
      "https://books.google.com/books/content?id=SEI5xfcNJ2wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71yS7rl6EZHF4QEqtajE6deYzixD2iRCYNfCRQtHYbZVoTjRxu5tMKCegV051AkLvsdg37FYWXCRmN_qa9orrbXROW6k5K6LBVgA1vt0is3PHku4t9qni7dPZabxjm4yXiKoJc6",
    link:
      "https://books.google.com/books?id=SEI5xfcNJ2wC&source=gbs_slider_cls_metadata_8_mylibrary"
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
