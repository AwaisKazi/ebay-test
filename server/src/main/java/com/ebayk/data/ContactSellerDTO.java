package com.ebayk.data;

public class ContactSellerDTO {
    private String sellerName;
    private Integer adId;
    private Integer sellerId;
    private String message;
    private String phoneNumber;

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Integer getAdId() {
        return adId;
    }

    public void setAdId(Integer adId) {
        this.adId = adId;
    }

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean isFilled() {
        return sellerName != null && sellerName.length() > 0
                && adId != null && adId.toString().length() > 0
                && sellerId != null && sellerId.toString().length() > 0
                && message != null && message.length() > 0
                && phoneNumber != null && phoneNumber.length() > 0;
    }

    @Override
    public String toString() {
        return "ContactSellerDTO{" +
                "sellerName='" + sellerName + '\'' +
                ", adId=" + adId +
                ", sellerId=" + sellerId +
                ", message='" + message + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}
