// UserDto.java
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
    private String email;
    private String dob;
    private String gender;
    private String address;
    private Long mobileno;
    private String education;
    private String workexperience;
    private String skills;
}
