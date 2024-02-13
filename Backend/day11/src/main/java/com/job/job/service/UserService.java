package com.job.job.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.job.job.controller.UserDto;
import com.job.job.dto.userdto;
import com.job.job.model.Users;
import com.job.job.repository.UserRepo;



@Service
public class UserService {
    @Autowired
    UserRepo ur;
     
     
     public boolean AddUser(Users ue)
     {
          ur.save(ue);
          return true;
     }
     public List<Users> getUser()
     {
          return ur.findAll();
     }
     public Optional<Users> getById(String id)
     {
    	 return ur.findById(id);
     }
     public List<UserDto> getAllUsers() {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getAllUsers'");
     }
     public UserDto createUser(UserDto userDto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'createUser'");
     }
    public UserDto getUserByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserByName'");
    }
    }
     