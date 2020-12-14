Run the Program
- This project is live on https://farleysm8909.github.io/
- The JSON data used in the table in resume.html is live on https://farleysm8909.github.io/languages.json

How I went above and beyond for this project:
- Website contains 7 pages
- Added AJAX to retrieve JSON data and populate table in resume.html (automatically populates once DOM loads, no button)
- Used Vue to create an image carousel in graphics.html as opposed to copying code from assignment 6
- Added the current date to the footer (JS)
- Each page fades in (JS)
- DOM is manipulated in contact.html when form is/is not correctly filled out (form does not submit to a server)
- Used both flexbox (throughout) and CSS grid (in contact.html) for website layout
- Used CSS transitions (button hovers, images on homepages)
- Used arrow function syntax (line 40 of resume.js)

What I changed since the final demo on Sunday:
- I fixed the code in graphics.js so that "data" returns a function instead of having an object for a value. Thank you for sharing the link (https://vuejs.org/v2/guide/components.html) so I could learn more about this.
- Tweaked code to pass HTML/CSS/JS validation. Only thing I didn't do was add a semi-colon on like 76 of contact.js because every resource I've seen (including our lecture notes) does not put a semi colon after the creation of the Vue instance. Thus, I ommitted it because I think that might be a Vue thing that the js validator doesn't know about.


If you would like to see how I went above and beyond for this project each week, note the following weekly summaries:

WEEK 1 --------------------------------------------

How I went above and beyond
  - Created 5 web pages instead of 3
  - Used 5-7 semantic elements on each page (each page contains a <header>, <nav>, <main> and <footer>, as well as additional tags like <section>, <figure>, <figcaption>, etc.)
  - Embeded 2 videos and over 10 images
  - Used elements such as &amp;, &copy;, &mdash;, <hr>
  - Wrote what I hope is considered interesting content pertaining to me (see About and Index) as opposed to Lorem Ipsum/filler text

WEEK 2 --------------------------------------------

How I went above and beyond
- imported and used Google fonts (h1-h3, print h1-h3)
- used flexbox to layout pages
- added comments to stylesheets to better organize them (I plan to break these sections up so that each html page has its own CSS screen and print stylesheets in addition to the general one)
- Added 2 more pages (replaced gallery.html with photography.html, added videography.html and graphics.html)
- Created a drop-down menu in navigation under Work Samples
- More than 3 changes in printstyle.css:
  1) Hid navigation
  2) Changed body text from a sans-serif (Arial) to a serif font (Times New Roman)
  3) Changed header/h1/h2/h3 font from a sans-serif (Poppins) to a serif font (Domine)
  4) Got rid of text hyperlinks 
    - index.html: "Learn more about me ->"
    - about.html: "see map" and "cold process soapmaking"
  5) Updated footer (got rid of background color, updated color property and font-size)
  6) Made print message/notice visible in footer
  7) Hid resume figure and replaced it with print instructions; I decided that since the iframe offers its own way to print out the document and since the resume is itself a perfect page, it didn't make sense to print it out with the webpage since the header and h1 would push some of the resume down and disrupt its original look). Please let me know if you'd like for me to handle this differently, but this made the most sense to me.
  8) Tweaked other margins as necessary
- Added "fun facts" about me to About.html to add to my site's interesting content
- Spent a lot of time this week trying to get a good start on the term project so I (hopefully) don't have as much work to do towards the end of the semester when I will be much busier with my jobs!

WEEK 5 --------------------------------------------
- Fixed resume so it is in HTML/CSS instead of iframe
- Added form validation using JavaScript to contact.html (does not actually submit to a server, but updates to DOM based on user input)

WEEK 6 --------------------------------------------
- added bold/underline to about.html per Josh's suggestion
- added AJAX (table in resume.html)
- added Vue (carousel in graphics.html)
- made homepage a full page spread (per Josh's suggestion)
- Made resume more appealing (I mentioned I didn't like it as much as the PDF version, got rid of awkward space formerly to the right of the contact section)