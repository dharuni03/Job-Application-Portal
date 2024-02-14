package com.job.job.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class dto {
    private Long id;
    private String jobName; // Changed from Jobtitle to jobTitle
    private String jobLocation; // Changed from Joblocation to jobLocation
    private String jobType; // Changed from Jobtype to jobType
    private String startDate; // Changed from Startdate to startDate
    private String endDate; // Changed from Enddate to endDate
    private Long salary;
}