# image-processor

An image processing API for generating placeholders and resizing images. Once an image is created, it is saved as `*.png` and loaded from local storage on each further call.

## Installation

After cloning the repo install the dependencies:

```bash
npm install
```

## Usage

Before starting the server, place the images to be resized in the following directory (**only `*.jpg`-files** are supported):

```bash
./public/images/
```

Start the server:

```bash
npm start
```

The server will run on port 3000 by default, you can modify this by changig the `PORT` value in `index.ts`.

### API Endpoints

#### `/api/placeholder/:width/:height`

Will return a placeholder as `*.png` in the desired size. If only width is provided, a sqaured image will be returned.

Example:

```javascript
/api/placeholder/300/200   // 300px * 200px
/api/placeholder/100       // 100px * 100px
```

#### `/api/images`

Returns an array with all available image names.

Example:

```javascript
/api/images  // => ["image1", "image2", "image3"]
```

#### `/api/images/:imageName?width= &height= `

Returns the resized image. If only width is provided, a sqaured image will be returned.

Example:

```javascript
/api/images/cat?width=300&height=200 // cat.jpg as PNG resized to 300px * 200px
/api/images/dog?width=150            // dog.jpg as PNG resized to 150px * 150px
```

### Scripts

-   `npm start` start dev server
-   `npm run build` compile TS to JS
-   `npm run lint` run eslint
-   `npm run prettier` run prettier
-   `npm test` run test

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/isc/)
