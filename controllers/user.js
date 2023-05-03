import { User } from "../models/user.js";

export const getAllUsers= async (req, res) => {
    const users = await User.find({});
    const keyword = req.query.keyword
    console.log(keyword); 
    res.json({
      success: true,
      users,
    });
  }
export const register =  async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
      name,
      email,
      password,
    });
    res.status(201).cookie("tempo", "lol").json({
      success: true,
      message: "Registered Successfully",  
    });
  }

  export const special =(req,res)=>{
    res.json({
        success:true,
        message:"just doing js top down",
    })
}
export const getUserDetails =async (req, res) => {
    const { id } = req.params;
  
    const user = await User.findById(id);
    // console.log(req.params);
    res.json({
      success: true,
      user,
    });
  }