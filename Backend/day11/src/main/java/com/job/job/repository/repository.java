package com.job.job.repository;

import com.job.job.model.model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repository extends JpaRepository<model, Long> {
    model findByJobName(String jobName);
    void deleteByJobName(String jobName);
    // Other methods...
}