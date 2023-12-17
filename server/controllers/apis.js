import axios from "axios";
import { response } from "express";


export const postImage = async (req, res) => {
    try {
        console.log("email: " + req.body.email);
        console.log("user: " + req.body.user);
        
        // Process data...

        // Sending a response
        res.status(200).json({ message: "Data received successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};