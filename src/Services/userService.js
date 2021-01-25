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
export function login(data) {

    try {
        console.log("This is the Sign in part", data);
        let data3 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, data);
        return data3;
    } catch (error) {
        return error;
    }

};