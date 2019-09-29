package com.ebayk.data.user;

import com.ebayk.service.RatingAnalyzer;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserRepository {

    public User getUser(Integer id) throws RatingAnalyzer.UserNotFoundException {
        for (User user : SampleData.USERS) {
            if(user.getId().equals(id)) {
                return user;
            }
        }
        throw new RatingAnalyzer.UserNotFoundException(id);
    }

    public List<User> getUsers() {
        return SampleData.USERS;
    }

}
