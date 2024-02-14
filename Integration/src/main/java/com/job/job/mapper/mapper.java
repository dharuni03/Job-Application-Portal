package com.job.job.mapper;

import com.job.job.dto.dto;
import com.job.job.model.model;

public class mapper {

    public static dto mapToServiceDto(model serviceEntity) {
        // Implement the mapping logic
        return new dto(
                serviceEntity.getId(),
                serviceEntity.getJobName(),
                serviceEntity.getJobLocation(),
                serviceEntity.getJobType(),
                serviceEntity.getStartDate(),
                serviceEntity.getEndDate(),
                serviceEntity.getSalary()
        );
    }

    public static model mapToServiceEntity(dto serviceDto) {
        // Implement the mapping logic
        return new model(
                serviceDto.getId(),
                serviceDto.getJobName(),
                serviceDto.getJobLocation(),
                serviceDto.getJobType(),
                serviceDto.getStartDate(),
                serviceDto.getEndDate(),
                serviceDto.getSalary());
    }
}