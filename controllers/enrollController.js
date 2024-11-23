import practicalModel from '../models/practical.js';  


export const enrollPracticals = async (req, res) => {
    try {
      const { practicalId, studentId } = req.body;
  
      const practical = await practicalModel.findById(practicalId);
      if (!practical) {
        return res.status(404).json({ error: "Practical not found" });
      }
  
      if (practical.enrolledStudents.includes(studentId)) {
        return res.status(400).json({ error: "Already enrolled in this practical" });
      }
  
      practical.enrolledStudents.push(studentId);
      await practical.save();
  
      res.status(200).json({ message: "Enrolled successfully", practical });
    } catch (error) {
      res.status(500).json({ error: "Error enrolling in practical", message: error.message });
    }
  };