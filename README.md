# Semester project 2 - Dogshop

An e-commerce website that has both customer-facing and admin sections.
Both sections are responsive and the website will be populated by a Strapi API deployed on Heroku using Cloudinary as third party CMS for images.

## Description

This project showcase all I have learned in your studies so far.
The site have a good user experience and UI design, following today’s trends and design patterns.

### Customer-facing pages

- Home page |
  Banner with an image that is uploaded to Strapi.
  A list of featured products.

- Products page |
  A list of all products added to Strapi.
  A search text box.

- Product details page |
  This page is reached by a user clicking on a product on the product list page.

- Cart/Basket page |
  The cart/basket page display a list of all products added to the cart

### Admin section

- Login/Logout |
  Login form that allows administrator users to login. Local storage to keep the user logged in.

- Add/edit/remove products |
  Allow admin to added, edit or remove products from Strapi Api.

- Product images |
  Allow admin to added, edit or remove images from Cloudinary.

## Built With

You can list a the tech stack that you've used over here

- [Javascript](https://www.javascript.com/) Vanilla javascript
- [Bootstrap](https://getbootstrap.com)
- [Sass](https://sass-lang.com/)
- [Strapi](https://strapi.io/)
- [Heroku](https://heroku.com/)
- [Cloudinary](https://cloudinary.com/)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:Netius/DogShop.git
```

2. Install the dependencies:

```
npm install
```

3. Install Sass

You need to install sass, run and watch the file \sass\styles.scss
https://sass-lang.com/

4. Install a Strapi

You will need to have a Strapi installation running in your PC to full use this project.
Api structure in Strapi:

- Products (Collection Types) |
  title - Text
  description - Text
  price - Number
  image - Media
  image_url - Text
  featured - Boolean

- Home (Single Type) |
  hero_banner - Media
  hero_banner_alt_text - Text

- Users
  Create a admin user and password. This will be used to login to admin page in the site as well.

To use in development with Strapi deployed locally change the file - js/constants/strapiUrl.js

5. Cloudinary (optional)
   With you want to keep your images in a third party CMS check out this link:
   https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application

### Running

Right click on the index.html and choose "Open with live server" in Visual Studio Code.

## Contributing

This is a private project used in the university. I will keep the code unchanged and contribuition is not needed..

## Contact

[upneto.com](https://upneto.com/#contact)
