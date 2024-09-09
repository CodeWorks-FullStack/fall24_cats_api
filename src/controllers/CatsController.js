import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

// NOTE make sure your class name matches the filename!!!
export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAllCats)
      .post('', this.createCat)
  }


  async getAllCats(request, response, next) {
    try {
      const cats = await catsService.getAllCats()
      response.send(cats)
    } catch (error) {
      // NOTE this will handle sending an error response to the client
      next(error)
    }
  }

  async createCat(request, response, next) {
    try {
      const catData = request.body
      const cat = await catsService.createCat(catData)
      response.send(cat)
    } catch (error) {
      next(error)
    }
  }
}