import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ValuesService {
  async create(body) {
    return await dbContext.Values.create(body)
  }
  async edit(id, body) {
    return await dbContext.Values.findByIdAndUpdate(id, body)
  }
  async delete(id) {
    return await dbContext.Values.findByIdAndDelete(id)
  }
  async find(query = {}) {
    let values = await dbContext.Values.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const valuesService = new ValuesService();