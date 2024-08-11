export const categories = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1672759323421-f9aa91311d4d?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Arts",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1687609112015-23bcdb2385f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/6c/b1/05/6cb105db1a1d8e2d9ce30eda567c1597.jpg",
      title: "Manga",
    },
  ];
  
  export const products = [
    {
      id: 1,
      title: "Elton John",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703328414i/2784.jpg",
      genre: ["Arts", "Music"],
      synopsis:
        "Looking at Terry's photographs is like gazing through a window at the most extraordinary and exciting moments of my life. I'm so glad he was with us throughout the madness: in his evocative and stylish photos he captured those moments as no other photographer could.- Elton JohnElton John and iconic photographer Terry O'Neill worked together for many years, taking in excess of 5,000 photographs. From intimate backstage shots to huge stadium concerts, the photographs in this book represent the very best of this archive, with most of the images being shown here for the first time.O'Neill has drawn on his personal relationship with Elton John to write the book's introduction and captions.",
      author: "Terry O'Neill",
      price: 300,
      stock: 5,
      language: "English",
    },
  
    {
      id: 2,
      title: "The Story of Art",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1389274650i/222078.jpg",
      genre: ["Arts", "Picture"],
      synopsis:
        "Renowned not only as the best concise introduction to art history, but also as a classic of art historical literature, this book reflects the vast knowledge, insights, and expertise of one of this century's greatest art historians and thinkers. Extensively illustrated, it treats the history of art -- both chronologically and geographically -- as a continuous unfolding story.",
      price: 70,
      author: "E.H. Gombrich",
      stock: 1,
      language: "English",
    },
    {
      id: 3,
      title: "One Piece, Volume 1: Romance Dawn",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1318523719i/1237398.jpg",
      genre: ["Photography", "Music"],
      synopsis:
        "A new shonen sensation in Japan, this series features Monkey D. Luffy, whose main ambition is to become a pirate. Eating the Gum-Gum Fruit gives him strange powers but also invokes the fruit's curse: anybody who consumes it can never learn to swim. Nevertheless, Monkey and his crewmate Roronoa Zoro, master of the three-sword fighting style, sail the Seven Seas of swashbuckling adventure in search of the elusive treasure One Piece.",
      price: 30,
      author: "Eiichiro Oda",
      stock: 5,
      language: "English",
    },
    {
      id: 4,
      title: "Every Time You Hear That Song",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697493427i/186872427.jpg",
      genre: ["Music", "Arts"],
      synopsis:
        "Seventeen-year-old aspiring journalist Darren Purchase has been a lifelong fan of country music legend Decklee Cassel, who’s as famous for her classic hits as she is for her partnership with songwriter Mickenlee Hooper. The same Mickenlee who mysteriously backed out of the limelight at the height of their careers, never to be heard from again.",
      price: 200,
      author: "Jenna Voris",
      stock: 10,
      language: "English",
    },
    {
      id: 5,
      title: "Attack on Titan, Vol. 1",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1432712438i/13154150.jpg",
      genre: ["Manga", "Fiction"],
      synopsis:
        "For the past century, what's left of mankind has hidden in a giant, three-walled city, trapped in fear of the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming humankind, but the sudden appearance of an enormous Titan is about to change everything...",
      author: "Hajime Isayama",
      price: 100,
      stock: 5,
      language: "English",
    },
    {
      id: 6,
      title: "Modern Literary Nepali",
      img: "https://books.bizmandala.com/media/books/9780195651119/image.jpeg",
      genre: ["Arts"],
      synopsis:
        "Beginning with a general introduction that surveys the historical context and traces the growth of modern literature in Nepal, this book goes on to anthologize and translate a number of twentieth-century Nepali literary texts. The book is ideal for readers with a basic grasp of Nepali grammar and vocabulary.",
      price: 150,
      author: "Ram Bahadur Pandit",
      stock: 5,
      language: "Nepali",
    },
    {
      id: 7,
      title: "Life on the Edge",
      img: "https://books.bizmandala.com/media/books/9780552778077/9780552778077-1847.webp",
      genre: ["Arts"],
      synopsis:
        "Life is the most extraordinary phenomenon in the known universe; but how does it work? Even in this age of cloning and synthetic biology, the remarkable truth remains- nobody has ever made anything living entirely out of dead material. Life remains the only way to make life. Are we missing a vital ingredient in its creation?",
      price: 50,
      author: "Sanjaya Sharma",
      stock: 5,
      language: "Hindi",
    },
  ];


  

  // npm install --save @stripe/react-stripe-js @stripe/stripe-js


  export const countries = [
    { code: 'AU', name: 'Australia' },
    { code: 'BR', name: 'Brazil' },
    { code: 'CA', name: 'Canada' },
    { code: 'CN', name: 'China' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IT', name: 'Italy' },
    { code: 'JP', name: 'Japan' },
    { code: 'MX', name: 'Mexico' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'RU', name: 'Russia' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'KR', name: 'South Korea' },
    { code: 'ES', name: 'Spain' },
    { code: 'US', name: 'United States' },
  ];