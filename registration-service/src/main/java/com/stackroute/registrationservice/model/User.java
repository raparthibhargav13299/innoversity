package com.stackroute.registrationservice.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "users")
public class User {
    @Id
    private UUID userId;
    private String username;
    private String email;
    private String password;
    private String city;
    private String[] domain;
    private String picture;
    private String gender;
}
