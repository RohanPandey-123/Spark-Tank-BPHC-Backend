import { Form } from "../models/form.js";
import { Student } from "../models/student.js";
import jwt from "jsonwebtoken";

export const submitform = async (req, res, next) => {
  const {
      name,
      enrollmentNo,
      batch,
      mobileNo,
      emailId,
      uso,
      aadharNo,
      ideaSubject,
      detailedDescription,
      marketSize,
      targetMarket,
      marketingPlan,
      potentialRisks,
      salesStrategy,
      amountRequest,
      teamname
  } = req.body;

  const { token } = req.cookies;
  console.log("token: " + token);

  if (!token) {
      return res.status(401).json({
          success: false,
          message: "Login first",
      });
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      await Form.create({
          name,
          enrollmentNo,
          batch,
          mobileNo,
          emailId,
          uso,
          aadharNo,
          ideaSubject,
          detailedDescription,
          marketSize,
          targetMarket,
          marketingPlan,
          potentialRisks,
          salesStrategy,
          amountRequest,
          teamname,
          user: decoded._id,
      });

      const user = await Student.findById(decoded._id);

      res.status(201).json({
          success: true,
          message: `Form Submitted Successfully by ${user.name}`,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          success: false,
          message: "Internal Server Error",
      });
  }
};

export const getmyform = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const entrepreneur = await Form.find({ user: decoded._id });

    res.status(200).json({
      success: true,
      entrepreneur,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getallform = async (req, res, next) => {
  try {
    const entrepreneur = await Form.find({});

    res.status(200).json({
      success: true,
      entrepreneur,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
