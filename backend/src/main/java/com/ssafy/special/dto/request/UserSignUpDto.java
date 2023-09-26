package com.ssafy.special.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserSignUpDto {
    private String email;
    private String password;
    private String nickname;
    private String tendency;
    private int age;
    private int height;
    private int weight;
    private int activity;
    private String sex;
    private int[] goodFoodSeq;
    private int[] badFoodSeq;
}