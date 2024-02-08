// ApplicationFormRepository.java
package com.job.job.repository;

import com.job.job.model.ApplicationForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationFormRepository extends JpaRepository<ApplicationForm, Long> {
    // Add custom query methods if needed
}
