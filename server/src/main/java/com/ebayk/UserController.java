package com.ebayk;

import com.ebayk.data.user.User;
import com.ebayk.data.user.UserRepository;
import com.ebayk.service.RatingAnalyzer;
import com.ebayk.service.RatingAnalyzer.UserNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/{id}")
public class UserController {

  @Autowired
  UserRepository userRepository;

  @RequestMapping("/rated-users")
  public List<User> getUserWithRating(@PathVariable("id") Integer userId) throws UserNotFoundException {
    return RatingAnalyzer.getRatedUserForRatingCreator(userId);
  }

  @RequestMapping("/get")
  public User getUser(@PathVariable("id") Integer userId) throws UserNotFoundException {
    return userRepository.getUser(userId);
  }

}
