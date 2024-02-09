package com.job.job.model;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "adminside")
public class model{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Jobname",nullable = false)
    private String jobName;

    @Column(name = "Joblocation",nullable = false)
    private String jobLocation;

    @Column(name = "Jobtype",nullable = false)
    private String jobType;

    @Column(name = "Startdate",nullable = false)
    private String startDate;

    @Column(name = "Enddate",nullable = false)
    private String endDate ;

    @Column(name = "Salary",nullable = false)
    private Long salary;

}