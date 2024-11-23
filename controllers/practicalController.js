

import practicalModel from '../models/practical.js';  
import Subject from '../models/subject.js'
   
export const createPractical = async (req, res) => {

    try {

        const {subjectId, title, description,createdBy } = req.body;
        const subjectinfo = await Subject.findOne({ name: subjectId });

        const practicalobj = new practicalModel({
            subjectId:subjectinfo.id,
            title,
            description,
            createdBy
        });

        const savedpracticalObj = await practicalobj.save();

        res.json({

            savedpracticalObj,
            message: "Practical created successfully"
        });

    } catch (error) {

        console.log(error);

        res.json({

            error: "Error occured",
        });

    }
}
export const getAllPracticals=async(req,res)=>{  
  try{  
    const practicals=await practicalModel.find()  
    res.json({  
        practicals 
})  
}  
catch(error)  
{  
return res.status(400).json({ 
error:"error while fetching post",  
})  
}  
}