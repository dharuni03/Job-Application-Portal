package com.job.job.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class userdto {
    private Long id;
    private String name; 
    private String email;// Changed from Jobtitle to jobTitle
    private String dob; // Changed from Joblocation to jobLocation
    private String gender; // Changed from Jobtype to jobType
    private String address; 
    private Long mobileno;
    private String education;
    private String workexperience;
    private String skills;

}