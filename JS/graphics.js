/* Code adapted from: https://medium.com/@davidatomhernandez/how-to-a-simple-carousel-with-vue-138715d615d7 */
var carousel = new Vue({
  el: "#carousel", 
  data: {
    slides: [
      {
        id: 1,
        imgSrc: "images/Man_on_the_Moon_Photo_Project.jpg",
        altText: "Photoshopped image of a man walking towards a giant moon with houses on it",
        caption: "'Man on the Moon' Photoshop project for a photography class"
      },
      {
        id: 2,
        imgSrc: "images/TourDeItalia.jpg",
        altText: "Photoshopped image of bike handlebars in Rome",
        caption: "'Tour de Italia' Photoshop project for a visual rhetoric class"
      },
      {
        id: 3,
        imgSrc: "images/Bowling_Website_Homepage_Compressed.jpg",
        altText: "Bowling website homepage",
        caption: "Bowling website design made for a web design class"
      },
      {
        id: 4,
        imgSrc: "images/College_Cookin'_Graphic.jpg",
        altText: "College Cookin' logo",
        caption: "Logo for my multimedia column in the UWEC student newspaper"
      },
      {
        id: 5,
        imgSrc: "images/thankyoucard.png",
        altText: "Thank you card with butterfly",
        caption: "Thank You card created for a digital image and design class"
      },
      {
        id: 6,
        imgSrc: "images/proj4_redgreen.png",
        altText: "Spanish sticker design",
        caption: "Sticker design for a Spanish saying that translates to 'It matters to me a pepper'"
      },
      {
        id: 7,
        imgSrc: "images/Board_Game_Cards_1.jpg",
        altText: "Cards designed for a board game",
        caption: "Cards designed for a board game about zoo animals"
      },
      {
        id: 8,
        imgSrc: "images/compressed_project3.jpg",
        altText: "Editorial website design for a typography class",
        caption: "Editorial website design for a typography class"
      },
      {
        id: 9,
        imgSrc: "images/homepage_crop.jpg",
        altText: "Photography website design homepage",
        caption: "Photography website design"
      }
    ]
  },

  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
})
