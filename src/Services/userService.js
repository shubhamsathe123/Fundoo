import axios from "axios";
import React from "react";
// import { Component } from "react";
// const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user";

export function registration(data) {
    try {
        console.log("This is the Sign up part", data);
        let data1 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`, data);
        return data1;
    } catch (error) {
        return error;
    }

};
