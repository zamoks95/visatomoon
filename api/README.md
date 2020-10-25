# API service

This is a simple **REST API** created using [**express**](https://expressjs.com/) to provide data for the frontend.

When this server is  initialized, [localhost:3003](http://localhost:3003) is listening for requests.

## Usage
### /sliderData
Returns a json containing data for an especific slide.
- **Method**: Get
- **Params**
- - **index**: required, integer

### /assets/images/...
This action is used as a CDN to serve images for the frontend
Example: http://localhost:3003/assets/images/background.jpg