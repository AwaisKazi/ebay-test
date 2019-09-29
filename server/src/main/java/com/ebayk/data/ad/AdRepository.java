package com.ebayk.data.ad;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdRepository {

    public Ad getAd(Integer id) {
        return null;
    }

    public List<Ad> getAds() {
        return SampleData.ADS;
    }
}
