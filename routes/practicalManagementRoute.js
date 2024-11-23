

import {
  createAdmin,
  createTeacher,
  createStudent,
  getAllUsers,
  getAdmins,
  getTeachers,
  getStudents,



} from "../controllers/userController.js";
import {
  createSubject,
  getSubjects,
} from "../controllers/subjectController.js";
import {
  createPractical,
  getAllPracticals,
} from "../controllers/practicalController.js";
import { enrollPracticals } from "../controllers/enrollController.js";
import express from "express";
import { isAdmin,isTeacher, isAdminOrTeacher} from "../middleware/Middleware.js";



const router = express.Router();

router.post("/admin/create", createAdmin);
router.post("/teacher/create", createTeacher);
router.post("/student/create", createStudent);
router.post("/subject/create", createSubject);
router.post("/practical/create",createPractical);
router.post("/enroll/add", enrollPracticals);
router.get("/users/get",  getAllUsers);
router.get("/admins/get",getAdmins);
router.get("/teachers/get", getTeachers);
router.get("/students/get",  getStudents);


router.get("/subjects/get", getSubjects);
router.get("/practicals/get",getAllPracticals);

export default router;
