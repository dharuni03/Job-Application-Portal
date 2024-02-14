package com.job.job.controller;

import com.job.job.dto.dto;
import com.job.job.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/services")
public class controller {
@Autowired
    private final service serviceservice;

    public controller(service serviceservice) {
        this.serviceservice = serviceservice;
    }

    @GetMapping
    public ResponseEntity<List<dto>> getAllServices() {
        List<dto> services = serviceservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{jobname}")
    public ResponseEntity<dto> getServiceByName(@PathVariable String jobname) {
        dto service = serviceservice.getServiceByName(jobname);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<dto> createService(@RequestBody dto service) {
        dto createdService = serviceservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{jobname}")
    public ResponseEntity<dto> updateServiceByName(@PathVariable String jobname, @RequestBody dto updatedService) {
       dto updatedServiceDto = serviceservice.updateServiceByName(jobname, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{jobname}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String jobname) {
        serviceservice.deleteServiceByName(jobname);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}