import React, { useState } from "react";
import "./Staff.css";
import axios from "axios";

const Staff = () => {
  const [batch, setBatch] = useState("");
  const [classroom, setClassroom] = useState("");
  const [subject, setSubject] = useState("");
  const [staffName, setStaffName] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const batchlist = ["BECSE26G1", "BECSE26G2", "BECSE26AIML"];
  const classroomlist = ["GRDLAB", "PROGRAMMINGLAB1", "PROGRAMMINGLAB2", "HARDWARELAB"];
  const subjectlist = ["19z501", "19z502", "19z503", "19z504", "19z505", "19O001", "19z511", "19z512"];
  const staffNames = ["SATHIYAPRIYA K", "RAMESH A C", "SUDHA SADASIVAM G", "PRAKASH J", "VIJAYALAKSHMI S", "INDUMATHI D", "ARUL ANAND N"];

  const batchlistHandler = (event) => setBatch(event.target.value);
  const classroomlistHandler = (event) => setClassroom(event.target.value);
  const subjectlistHandler = (event) => setSubject(event.target.value);
  const staffNameHandler = (event) => setStaffName(event.target.value);

  const generateRandomCode = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  };

  const handleGenerateCode = (event) => {
    event.preventDefault();
    const code = generateRandomCode(10);
    setGeneratedCode(code);
    window.alert(`Generated Code: ${code}`);
  };

  const handleSendMsg = async (event) => {
    event.preventDefault();

    // Validate all fields and build an error message
    let errorMessage = "";
    if (!staffName) errorMessage += "Staff Name is required.\n";
    if (!batch) errorMessage += "Student Batch is required.\n";
    if (!classroom) errorMessage += "Classroom is required.\n";
    if (!subject) errorMessage += "Subject is required.\n";
    if (!generatedCode) errorMessage += "Generated Code is required.\n";

    if (errorMessage) {
      window.alert(errorMessage.trim());
      return;
    }

    const formData = {
      staff_name: staffName,
      batch,
      classroom,
      subject,
      generated_code: generatedCode
    };

    try {
      // Send the data to the Django backend via a POST request
      const response = await axios.post("http://127.0.0.1:8000/api/staff/", formData);
      console.log("Response:", response.data);
      window.alert("Message Successfully Sent!");
    } catch (error) {
      console.error("Error sending data:", error);
      window.alert("Error submitting form data!");
    }
  };

  const ModifyAttendance = (event) => {
    event.preventDefault();
    console.log("Attendance Modified");
    window.alert("Attendance Modified Successfully!");
  };

  return (
    <div className="staff-container">
      <h1 className="staff-title">Staff Dashboard</h1>
      <form className="staff-form">
        <div className="form-group">
          <label htmlFor="staffName">Staff Name</label>
          <select name="staffName" value={staffName} onChange={staffNameHandler} required>
            <option value="" disabled>
              Select Staff Name
            </option>
            {staffNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="batch">Student Batch</label>
          <select name="batch" value={batch} onChange={batchlistHandler} required>
            <option value="" disabled>
              Select Batch
            </option>
            {batchlist.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="classroom">Class Room</label>
          <select name="classroom" value={classroom} onChange={classroomlistHandler} required>
            <option value="" disabled>
              Select Classroom
            </option>
            {classroomlist.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject Code</label>
          <select name="subject" value={subject} onChange={subjectlistHandler} required>
            <option value="" disabled>
              Select Subject
            </option>
            {subjectlist.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-container">
          <button onClick={handleGenerateCode} className="btn-generate">
            Generate Code
          </button>
          <button onClick={handleSendMsg} className="btn-send">
            Send Message
          </button>
          <button onClick={ModifyAttendance} className="btn-modify">
            Modify Attendance
          </button>
        </div>
        {generatedCode && <p className="generated-code">Generated Code: {generatedCode}</p>}
      </form>
    </div>
  );
};

export default Staff;
