# Warren Yen Home Site

## Setup

1. Clone/download repo from github [here](https://github.com/masonmedia/warren_yen_portfolio).
2. Open terminal (press command + space bar to open, and type `terminal`) and `cd` (change directory) into the project folder (`cd warren_yen_portfolio`).
3. Once in the project folder, type `npm init` to download needed dependencies (node modules).
4. To start a development server that will refresh whenever you make and save changes, type `parcel index.html`.
5. Open up `index.html`, `styles.scss` and start editing.
6. Fork my git repo to create your own separate thread to store your code, or create a completely new one of your own if you want to have it be private etc.
7. When ready to build and deploy the site, type `parcel build index.js`. Parcel will create a `dist` folder which will be your production ready folder to be pushed to your server. 
8. Depending on your server/hosting setup, you can compress the `dist` folder into a .zip file and push, or use ssh, gihub, whatever
you use.

## HTML

I've commented the code in both `index.html` (home page template) and `jaxxliberty.html` (detail page template) to show the copy/pastable components to add more content. 

## Assets

### CSS

1. Your CSS is in the `styles.scss` file.  I've used bootstrap 4 and imported its styles into the main stylesheet, and you can write plain CSS or use SASS.
2. Bootstrap uses "functional" CSS where styles are separated into "utility" classes that reduce styling to the smallest possible components for single-use. Padding, margin, grid, borders, colors, etc., are all given their own classes that are added directly to the HTML. They can be used or you can write your own styles depending on what you need. Check out the [Bootstrap docs for more info](https://getbootstrap.com/docs/4.4/getting-started/introduction/).

#### Classes

1. Links: I added a class `.x-link` for external links (i.e. your "see sample" links on the detail page). To remove stock anchor styling on navigation and home page project links, only anchors with the `.x-link` class will behave like native web links (blue color, underline on hover, etc). You can control or change that in the css under `//links`. 
2. Alignment: bootstrap uses flexbox for layout and alignment. 
    - for centered elements, use `.flex-center`;
    - for left-aligned elements, use `.flex-left`;
    - for right-aligned elements, use `.flex-right`;
    - to center-align elements only at mobile, add `.flex-center-sm` to your existing classes*

*Most of the text is left-aligned, but anything that needs to be centered at mobile breakpoints, use the `.flex-center-sm` class. This takes any previous alignment and forces it to be centered at `768px` and below.

i.e. You could use the following to have left-aligned content on desktop and tablet, and centered content on mobile:

```
<div class="flex-left flex-center-sm">
    <h1>Some content</h1>
</div>
```

### Adding pages/projects

You'll want to add new pages in the root folder (same folder as `index.html` and `about.html`). You can use the index.html page as a template: copy it, create a new file, paste in the code and make your edits.

### Layout

#### Home

Be aware that card titles and text length will need to be relatively similar throughout if you want to keep the heights the same. Longer text in one card will force the entire card element down to accomodate.

#### Detail [Jaxx Liberty]

The Jaxx Liberty page serves as your project detail template. Create a new file in the root directory, call it whatever the new project is, copy all the code from Jaxx Liberty and you're set to start editing. As mentioned, components are commented so you can combine whatever you need.

### Copying/pasting components

#### Home Page

The basic 2-card component is commented `<!-- 2-card component -->`. Inside of that you'll see the individual projects commented.

### Images

Put your images in the `img` folder. In the `parcel build index.js` process, they get minified and optimized automatically.

### Animation

1. The page transition animation is a fade in and out, controlled by the `.transition-fade` class under `// #swup animations` in the CSS. I also added a `.fadeIn` class as the swup transition animations only apply to page transitions (when you click a menu link), not to the initial page load. 
2. The scroll animation (fading in and up) is from a library called AOS (animate on scroll). Add `data-aos="fade"` directly in the HTML to the element you want to animate. It can go on any div, element, image, whatever you want to fade in on scroll. More animation options are at [aos.com](https://michalsnik.github.io/aos/).
3. Scroll animation options/parameters are in the `index.js` file under `// AOS scroll animation`. You can control speed, duration, offset, etc.

### Code Editor

I use VS Code (same as Decentral). It has a built-in terminal and github connection functionality which is super useful. Download [here](https://code.visualstudio.com/).

### Resume

Put your CV file in the root folder. In the `nav` find the `Resume` link and paste in the url (i.e. `src="/warren_yen_cv.pdf"`).