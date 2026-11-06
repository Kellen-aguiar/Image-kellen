package io.spring.image.demo.application.config;

import io.jsonwebtoken.security.Password;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class SecurityConfig {
    public Password Encode passwordEncode(){
        return new BCryptPasswordEncoder();
    }
}
