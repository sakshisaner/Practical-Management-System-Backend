
import userModel from "../models/user.js";
import User from "../models/user.js"

export const createAdmin=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const createTeacher=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Teacher",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Teacher created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const createStudent=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Student",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Student created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  
  export const getAdmins = async (req, res) => {
    try {
        const admin= await userModel.find({ role: 'Admin' });
        const adminWithoutPassword=admin.map((user)=> {
            const{password,...userWithoutPassword}=user.toObject();
        return userWithoutPassword;
        });

        res.status(200).json({
            admin:adminWithoutPassword,
            message:"Admin fetched successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching Admin' });
    }
};
export const getStudents = async (req, res) => {
  try {
      const students= await userModel.find({ role: 'Student' });
      const studentWithoutPassword=students.map((user)=> {
          const{password,...userWithoutPassword}=user.toObject();
      return userWithoutPassword;
      });

      res.status(200).json({
          students:studentWithoutPassword,
          message:"Students fetched successfully",
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching students' });
  }
};

export const getTeachers = async (req, res) => {
  try {
      const teachers= await userModel.find({ role: 'Teacher' });
      const teacherWithoutPassword=teachers.map((user)=> {
          const{password,...userWithoutPassword}=user.toObject();
      return userWithoutPassword;
      });

      res.status(200).json({
          teachers:teacherWithoutPassword,
          message:"Teachers fetched successfully",
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching teachers' });
  }
};


export const getAllUsers=async(req,res)=>{
  try {
     const users = await userModel.find()

     if(!users.length){
      return res.status(404).json({
          message:"No Users found",
      });
     }

     const usersWithoutPassword=users.map((user)=>
  {
      const{password, ...userWithoutPassword}=user.toObject();
      return userWithoutPassword;
  });

  res.status(200).json({
      users:usersWithoutPassword,
      message:"Users fetched Successfully"
  });
  }     catch (error) {
      console.error("Error fetching Users:",error.message);
      res.status(500).json({
          error:"Error fetching Users",
      });
      }
  };