package com.ebayk;

import java.util.Arrays;
import java.util.List;

import com.ebayk.data.ContactSellerDTO;
import com.ebayk.data.ad.Ad;

import com.ebayk.data.ad.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdsController {

  @Autowired
  AdRepository adRepository;

  // Fetch ads from AdRepository
  @RequestMapping("/ad-list")
  public List<Ad> listAd() {
    return adRepository.getAds();
  }

  @RequestMapping(value = "/send-message", method = RequestMethod.POST)
  public Boolean sendMessageToSeller(@RequestBody ContactSellerDTO contactSellerDTO) throws Exception {
    if(!contactSellerDTO.isFilled()) {
      throw new Exception("data invalid");
    }

    System.out.println(contactSellerDTO);
    return true;
  }

  // Fetch a single ad from AdRepository
  // Add params as you want
  @RequestMapping("/ad-single")
  public Ad singleAd() {
    // This is just placeholder sample data
    return Ad.newAd().id(42).title("Title Nr. 42").description("Description 40")
        .imageUrl("https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/Zb0AAOSw8ihcc6Li/$_72.JPG").build();
  }
}
