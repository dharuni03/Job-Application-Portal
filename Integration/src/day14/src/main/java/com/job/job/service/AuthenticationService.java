package com.job.job.service;

import com.job.job.dto.request.LoginRequest;
import com.job.job.dto.request.RegisterRequest;
import com.job.job.dto.response.LoginResponse;
import com.job.job.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}