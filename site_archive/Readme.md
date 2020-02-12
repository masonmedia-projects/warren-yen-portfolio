# Warren Yen Home Site

## Setup

1. Clone/download repo from github [here](https://github.com/masonmedia/warren_yen_portfolio).
2. Open terminal (on Mac press command + space bar to open a search window, and type `terminal`). In the Terminal window type `cd` (change directory) into the project folder (`cd warren_yen_portfolio`). You can rename this folder to whatever you want. 
3. Type `parcel index.html`: this will automatically install dependencies and start a development server. Note -- this automatically creates a `dist` folder that is the compiled code. Don't edit anything in here.
4. Open up files (`index.html`, `styles.scss`, etc.) and start editing.
5. If you want to save your new version, create a github account and fork my git repo to create your own separate thread to store your code, or create a completely new one of your own if you want to have it be private etc.

### Build process + Deploying

1. When you're ready to build and deploy the site, type `parcel build index.js`. Parcel will create a new `dist` folder which will have all your production-ready files minified, images compressed, css auto-prefixed, etc. You'll push this folder to your server. 
2. My hosting/server uses cPanel and is old school and doesn't use SSH, so I zip the dist folder, upload it to my domain root folder, and extract/uncompress the zip. Yours may use FTP, not sure - I can run over this with you as well.

### Dev server and build bugs to be aware of

1. Type `parcel index.html` into your terminal to start the dev server; changes should show up automatically after saving.
2. Sometimes changes you make won't show up in the browser when you save and refresh the page. If you find your changes aren't working or you're seeing other issues, you may need to
a) quit and restart the dev server: 
- type `control` and `c` to quit;
- then `parcel index.html` to restart 
b) delete the `dist` folder and rerun the build process to get a fresh copy:
- open `dist` folder;
- delete all files EXCEPT the .htaccess;
- go back to your terminal and run `parcel index.html`;
- this will rebuild the dist folder and you should be good to go.
c) when creating new pages, parcel may throw an error if you create a link to a new page BEFORE creating the new page. To prevent this, first create and save a new .html page, THEN link to that page in your code.

## HTML

I've commented the code in both `index.html` (home page template) and `jaxxliberty.html` + `Metric Dashboard` (detail page templates) to show the copy/pastable components to add more content. 

## Meta tags

In the header are all your meta tags. Most of them are commented, but the key ones to change on each page are the:
- title
- description [really only necessary for SEO, not essential] 

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
3. Background images:  


### Adding pages/projects

You'll want to add new pages in the root folder (same folder as `index.html` and `about.html`). You can use the `jaxxliberty.html` page as a template: 
- copy all the HTML;
- create a new file [`command n`];
- paste in the code;
- save the file as `whateverproject.html`
- THEN go back and link to that new page on the `index.html`.

### Layout

#### Home

1. Be aware that card titles and text length will need to be relatively similar throughout if you want to keep the heights the same. Longer text in one card will force the entire card element down to accomodate.
2. On the home page, the main page container uses a `.container-fluid` class, which has less padding. On the detail page, your mockups had more padding so I used the `.container` class. The difference is mostly on desktop. As requested, the padding on mobile is the same.

#### Detail [jaxxliberty + metricdashbaord]

The Jaxx Liberty page serves as your project detail template. Components are commented so you can copy, paste, and combine whatever you need.

### Copying/pasting components

#### Home Page

The basic 2-card component is commented `<!-- 2-card component -->`. Inside of that you'll see the individual projects commented.

### Images

Put your images in the `img` folder. In the `parcel build index.js` process, they get minified and optimized automatically. Link to images by starting with the img folder, and then the image name itself: `<img href="/img/path-to-img.jpg">`.

### Animation

1. The page transition animation is a fade in and out, controlled by the `.transition-fade` class under `// #swup animations` in the CSS. I also made a `.transition-fadeInDown` class for the menu that makes the it slide up as the page changes, and back down when the new page has loaded. You can delete it from the html if not desired.
I also added a `.fadeIn` class for the whole body, as the page transition animations don't apply to the initial page load, only to page changes when links are clicked. 
2. The home page scroll animation (fading in and up) is from a library called AOS (animate on scroll). Add the `data-aos="fade"` attribute directly to any HTML element you want to animate. It can go on any div, element, image, whatever you want to fade in on scroll. More animation options are at [aos.com](https://michalsnik.github.io/aos/).
3. Scroll animation options/parameters are in the `index.js` file under `// AOS scroll animation`. You can control speed, duration, offset, etc.

### Code Editor

I use VS Code (same as Decentral). It has a built-in terminal and github connection functionality which is super useful. Download [here](https://code.visualstudio.com/).

### Resume

Put your CV file in the root folder. In the `nav` find the `Resume` link and paste in the url (i.e. `src="/warren_yen_cv.pdf"`).