// ApplicationFormController.java
package com.job.job.controller;

import com.job.job.dto.ApplicationFormDTO;
import com.job.job.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/forms")
public class AppController {

    @Autowired
    private ApplicationFormService formService;

    @PostMapping("/submit")
    public void submitApplicationForm(@RequestBody ApplicationFormDTO formDTO) {
        formService.submitApplication(formDTO);
    }
}
