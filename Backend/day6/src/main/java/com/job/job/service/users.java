package com.job.job.service;

import com.job.job.dto.userdto;
import com.job.job.model.Usermodel;
import com.job.job.mapper.usermapper;
import com.job.job.repository.userrepository;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class users {

    private final userrepository userrepo;

    public users(userrepository userrepo) {
        this.userrepo = userrepo;
    }

    public List<userdto> getAllUsers() {
        List<Usermodel> users = userrepo.findAll();
        return users.stream()
                .map(usermapper::mapToDto)
                .collect(Collectors.toList());
    }

    public userdto getUserByName(String name) {
        Usermodel userEntity = userrepo.findByname(name);
        return usermapper.mapToDto(userEntity);
    }

    public userdto createUser(userdto userDto) {
        Usermodel userEntity = usermapper.mapToEntity(userDto);
        userEntity = userrepo.save(userEntity);
        return usermapper.mapToDto(userEntity);
    }

    public userdto updateUserByName(String name, userdto updatedUserDto) {
        Usermodel existingUser = userrepo.findByname(name);

        if (existingUser != null) {
            // Update the fields you want to allow updating
            existingUser.setName(updatedUserDto.getName());
            existingUser.setEmail(updatedUserDto.getEmail());
            existingUser.setDob(updatedUserDto.getDob());
            existingUser.setGender(updatedUserDto.getGender());
            existingUser.setAddress(updatedUserDto.getAddress());
            existingUser.setMobileno(updatedUserDto.getMobileno());
            existingUser.setEducation(updatedUserDto.getEducation());
            existingUser.setWorkexperience(updatedUserDto.getWorkexperience());
            existingUser.setSkills(updatedUserDto.getSkills());

            existingUser = userrepo.save(existingUser);
            return usermapper.mapToDto(existingUser);
        } else {
            // Handle not found scenario, e.g., throw an exception
            throw new RuntimeException("User with name " + name + " not found");
        }
    }
    @Transactional
    public void deleteUserByName(String name) {
        userrepo.deleteByname(name);
    }
}