import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";

export class ValuesController extends BaseController {
  constructor() {
    super("api/values");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      return res.send([await valuesService.find()]);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let newValue = await valuesService.create(req.body)
      res.send(newValue)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await valuesService.delete(req.params.id)
      res.send("Deleted")
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let value = await valuesService.edit(req.params.id, req.body)
      res.send({ data: value, message: "YOU GOT VALUE" })
    } catch (error) {
      next(error)
    }
  }
}
