import BaseController from "../utils/BaseController.js";

// NOTE make sure your class name matches the filename!!!
export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAllCats)
  }


  getAllCats(request, response, next) {
    try {
      response.send('Meow! Cats Controller is working')
    } catch (error) {
      // NOTE this will handle sending an error response to the client
      next(error)
    }
  }
}