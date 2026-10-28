package io.spring.image.demo.application.users;

import io.spring.image.demo.domain.AccessToken;
import io.spring.image.demo.domain.entity.User;
import io.spring.image.demo.domain.exception.DuplocatedTupleExeption;
import io.spring.image.demo.domain.service.UserService;
import io.spring.image.demo.infra.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static org.postgresql.util.PasswordUtil.encodePassword;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public User save(User user) {
        var possibleUser = getByEmail(user.getEmail());

        if (possibleUser != null) {
            throw new DuplocatedTupleExeption("User already exists!");
        }

        encodePassword(user);
    }

    @Override
    public AccessToken autenticate(String email, String password) {
        return null;
    }
}