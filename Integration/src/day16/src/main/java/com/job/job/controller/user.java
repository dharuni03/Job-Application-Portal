
// package com.job.job.controller;

// import com.job.job.dto.userdto;
// import com.job.job.service.users;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/userside")
// @CrossOrigin(origins = "http://localhost:5173")
// public class user {

//     private final users serviceservice;

//     public user(users serviceservice) {
//         this.serviceservice = serviceservice;
//     }

//     @GetMapping
//     public ResponseEntity<List<userdto>> getAllServices() {
//         List<userdto> services = serviceservice.getAllUsers();
//         return new ResponseEntity<>(services, HttpStatus.OK);
//     }

//     @GetMapping("/{name}")
//     public ResponseEntity<userdto> getServiceByName(@PathVariable String name) {
//         userdto service = serviceservice.getUserByName(name);
//         if (service != null) {
//             return new ResponseEntity<>(service, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @PostMapping
//     public ResponseEntity<userdto> createService(@RequestBody userdto service) {
//         userdto createdService = serviceservice.createUser(service);
//         return new ResponseEntity<>(createdService, HttpStatus.CREATED);
//     }

//     @PutMapping("/{name}")
//     public ResponseEntity<userdto> updateServiceByName(@PathVariable String name, @RequestBody userdto updatedService) {
//        userdto updatedServiceDto = serviceservice.updateUserByName(name, updatedService);
//         if (updatedServiceDto != null) {
//             return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @DeleteMapping("/{name}")
//     public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
//         serviceservice.deleteUserByName(name);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }
package com.job.job.controller;

import com.job.job.dto.userdto;
import com.job.job.service.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/auth")

// @CrossOrigin(origins = "http://localhost:5173")
public class user {
@Autowired
    private final users serviceservice;

    public user(users serviceservice) {
        this.serviceservice = serviceservice;
    }

    @GetMapping
    public ResponseEntity<List<userdto>> getAllServices() {
        List<userdto> services = serviceservice.getAllUsers();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<userdto> getServiceByName(@PathVariable String name) {
        userdto service = serviceservice.getUserByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/userside")
    public ResponseEntity<userdto> createService(@RequestBody userdto service) {
        userdto createdService = serviceservice.createUser(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<userdto> updateServiceByName(@PathVariable String name, @RequestBody userdto updatedService) {
        userdto updatedServiceDto = serviceservice.updateUserByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        serviceservice.deleteUserByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }
}
