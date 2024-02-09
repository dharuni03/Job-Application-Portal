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
@Table(name = "usersides")
public class Usermodel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "dob",nullable = false)
    private String dob;

    @Column(name = "gender",nullable = false)
    private String gender;

    @Column(name = "address",nullable = false)
    private String address ;

    @Column(name = "mobileno",nullable = false)
    private Long mobileno;

    @Column(name = "education",nullable = false)
    private String education;

    @Column(name = "workexperience",nullable = false)
    private String workexperience;

    @Column(name = "skills",nullable = false)
    private String skills;

}