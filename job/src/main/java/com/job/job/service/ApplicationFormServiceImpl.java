// ApplicationFormServiceImpl.java
package com.job.job.service;

import com.job.job.dto.ApplicationFormDTO;
import com.job.job.mapper.ApplicationFormMapper;
import com.job.job.model.ApplicationForm;
import com.job.job.repository.ApplicationFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationFormServiceImpl implements ApplicationFormService {

    @Autowired
    private ApplicationFormRepository formRepository;

    @Override
    public void submitApplication(ApplicationFormDTO formDTO) {
        // Implement submission logic here
        ApplicationForm form = ApplicationFormMapper.toEntity(formDTO);
        formRepository.save(form);
    }
}
