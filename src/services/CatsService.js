import { dbContext } from "../db/DbContext.js"

class CatsService {
  async getAllCats() {
    const cats = await dbContext.Cats.find()
    return cats
  }
}

export const catsService = new CatsService()