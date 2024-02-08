package com.job.job.mapper;

import com.job.job.dto.ApplicationFormDTO;
import com.job.job.model.ApplicationForm;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ApplicationFormMapper {

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public static ApplicationForm toEntity(ApplicationFormDTO formDTO) {
        ApplicationForm form = new ApplicationForm();
        form.setFirstName(formDTO.getFirstName());
        form.setLastName(formDTO.getLastName());
        
        // Parse date of birth
        Date dateOfBirth = parseDate(formDTO.getDateOfBirth());
        if (dateOfBirth != null) {
            form.setDateOfBirth(dateOfBirth);
        } else {
            // Handle parsing error
            throw new IllegalArgumentException("Invalid date format for date of birth");
        }
        
        form.setGender(formDTO.getGender());
        form.setAddress(formDTO.getAddress());
        form.setPhone(formDTO.getPhone());
        form.setEmail(formDTO.getEmail());
        form.setEducation(formDTO.getEducation());
        form.setAadhar(formDTO.getAadhar());
        return form;
    }

    private static Date parseDate(String dateString) {
        try {
            return dateFormat.parse(dateString);
        } catch (ParseException e) {
            // Log the error or handle it as required
            e.printStackTrace();
            return null; // Return null in case of parsing error
        }
    }

    // Add any other mapping methods if needed
}
