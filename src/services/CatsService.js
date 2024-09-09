import { dbContext } from "../db/DbContext.js"

class CatsService {
  async createCat(catData) {
    const cat = await dbContext.Cats.create(catData)
    return cat
  }
  async getAllCats() {
    const cats = await dbContext.Cats.find()
    return cats
  }
}

export const catsService = new CatsService()