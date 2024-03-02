const express = require("express");
const router = express.Router();
const registeredStudents = require("../models/registrationFormModel"); 
module.exports = () => {
  router.get("/", async (req, res) => {
    try {
      const students = await registeredStudents.find().sort({ Timestamp: 1 });
      res.status(200).json(students);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Could not fetch Customers" });
    }
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const student = await registeredStudents.findById(id);
      return res.status(200).json(student);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.post("/", async (req, res) => {
    const newCustomer = { ...req.body };
    try {
      const insertedCustomer = await registeredStudents.create(newCustomer);
      return res.status(200).json(insertedCustomer);
    } catch (error) {
      console.error("Error inserting new student:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const updatedCustomer = await registeredStudents.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      if (!updatedCustomer) {
        return res.status(404).json({ error: "registeredStudents not found" });
      }
      return res.status(200).json(updatedCustomer);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCustomer = await registeredStudents.findByIdAndDelete(id);
      if (!deletedCustomer) {
        return res.status(404).json({ error: "registeredStudents not found" });
      }
      return res
        .status(200)
        .json({ message: "registeredStudents deleted successfully", deletedCustomer });
    } catch (error) {
      console.error('Error deleting student:', error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
};