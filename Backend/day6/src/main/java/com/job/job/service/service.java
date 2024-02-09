package com.job.job.service;

import com.job.job.dto.dto;
import com.job.job.model.model;
import com.job.job.mapper.mapper;
import com.job.job.repository.repository;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class service {

    private final repository repository;

    public service(repository repository) {
        this.repository = repository;
    }

    public List<dto> getAllServices() {
        List<model> services = repository.findAll();
        return services.stream()
                .map(mapper::mapToServiceDto)
                .collect(Collectors.toList());
    }

    public dto getServiceByName(String jobtitle) {
        model serviceEntity = repository.findByJobName(jobtitle);
        return mapper.mapToServiceDto(serviceEntity);
    }

    public dto createService(dto serviceDto) {
        model serviceEntity = mapper.mapToServiceEntity(serviceDto);
        serviceEntity = repository.save(serviceEntity);
        return mapper.mapToServiceDto(serviceEntity);
    }

    public dto updateServiceByName(String jobtitle, dto updatedServiceDto) {
        model existingService = repository.findByJobName(jobtitle);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setJobName(updatedServiceDto.getJobName());
            existingService.setJobLocation(updatedServiceDto.getJobLocation());
            existingService.setJobType(updatedServiceDto.getJobType());
            existingService.setStartDate(updatedServiceDto.getStartDate());
            existingService.setEndDate(updatedServiceDto.getEndDate());
            existingService.setSalary(updatedServiceDto.getSalary());

            existingService = repository.save(existingService);
            return mapper.mapToServiceDto(existingService);
        } else {
            // Handle not found scenario, e.g., throw an exception
            throw new RuntimeException("Service with name " + jobtitle + " not found");
        }
    }
@Transactional
    public void deleteServiceByName(String jobtitle) {
        repository.deleteByJobName(jobtitle);
    }
}