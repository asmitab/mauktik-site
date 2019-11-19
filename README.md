## Site
https://www.mauktik.me/

## Features

Based on top of the [Eleventy Netlify boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate.git) repo, this has the following features.

* Netlify CMS - lets you edit web pages through https://www.mauktik.me/admin
* Responsive CSS (looks good on devices)
* Uses Markdown files for content
* Uses Liquid and/or Nunjucks templates for layout
* Continuous Deployment workflow via Netlify

## Web Page Editor

* Go to https://www.mauktik.me/admin and login
* You will see a menu on the left side with an entry for each page
* Each page is made up of sections: text & image or text only or image only. There are special types of section like a gallery
* The "title" field of the section is not displayed on the website but is used for naming them in the admin view
* Make any changes you want to existing sections or you can also add new sections
* Click "Publish" and wait for a few mins for the changes to appear on the website


## Local development

### 1. Clone this repository:

```
git clone git@github.com:asmitab/mauktik-site.git
```


### 2. Navigate to the directory

```
cd mauktik-site
```


### 3. Install dependencies

```
npm install
```

### 5. Build the site

```
npm run build
```

Or build automatically when a template changes:
```
npm run --watch
```

This builds the site and all the resulting files go in **_site** folder.

### 6. Run on local server

```
http-server _site
```
