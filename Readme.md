# Warren Yen Home Site

## Setup

1. Clone/download repo from github <!--url here-->
2. Open terminal (press command + space bar to open, and type `terminal`) and `cd` (change directory) into the project folder (`cd warren_site`).
3. Once in the project folder, type `npm init` to download needed dependencies.
4. To start a development server that will refresh whenever you make and save changes, type `parcel index.html`.
5. When ready to build and deploy, type `parcel build index.js`. Parcel will create a `dist` folder which will be your production ready folder ready to be pushed to your your server. 
6. Depending on your server/hosting setup, you can compress the `dist` folder into a .zip file and push, or use ssh, gihub, whatever
you use.

## Assets

### CSS

1. Your CSS is in the `styles.scss` file.  I've used bootstrap 4 and imported its styles into the main stylesheet, and you can write plain CSS or use SASS.
2. Bootstrap uses "functional" CSS where styles are separated into "utility" classes that reduce styling to the smallest possible components for single-use. Padding, margin, grid, borders, colors, etc., are all given their own classes that are added directly to the HTML. They can be used or you can write your own styles depending on what you need.
3. Links: I added a class `.x-link` for external links (i.e. your "see sample" links on the detail page). To remove stock anchor styling on navigation and home page project links, only anchors with the `.x-link` class will behave like native web links (blue color, underline on hover, etc). You can control or change that in the css under //links. 

### New pages

You'll want to add new pages in the root folder (same folder as `index.html` and `about.html` are). You can use the index.html page as a template, copy, create a new file, paste the code and make your edits.

### Layout

#### Home

Be aware that card titles and text length will need to be relatively similar throughout if you want to keep the heights the same. Longer text in one card will force the entire card element down to accomodate.

#### Detail [Jaxx Liberty]

The Jaxx Liberty page serves as your "detail.html" template. Create a new file in the root directory, call it whatever the new project is, copy all the code from Jaxx Liberty and you're set to start editing.

### Copying/pasting components

#### Home Page

The basic 2-card component is commented `<!-- 2-card component -->`. Inside of that you'll see the individual projects commented.

### Images

Put your images in the `img` folder. In the `parcel build index.js` process, they get minified and optimized automatically.

### Animation

1. The grey overlay between page changes can be customized or removed. 
2. To edit, go to `index.js`
3. To change the color, change the css `color` declaration to whatever you want.
4. To remove the overlay animation -- which will result in a simple fade in and slide down from the top on page changes -- either comment out or delete the second swup declaration in (as below):

`import SwupOverlayTheme from '@swup/overlay-theme';
`
and then remove the `plugins:` line from inside the const swup function:

from:
```
const swup = new Swup({
    plugins: [new SwupOverlayTheme({
        color: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    })]
});
```
to:

`const swup = new Swup();`

5. The fade animation is a library called AOS (animate on scroll). Add `data-aos="fade"` to any div or section you want to fade in on scroll.

### Code Editor

I use VS Code (same as Decentral). It has a built-in terminal and github connection functionality which is super useful.

### Resume

Put your CV file in the root folder. In the `nav` find the `Resume` link and paste in the url (i.e. `src="/warren_yen_cv.pdf"`).