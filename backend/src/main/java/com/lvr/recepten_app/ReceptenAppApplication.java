package com.lvr.recepten_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReceptenAppApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(ReceptenAppApplication.class);
        app.setBanner(new CustomBanner());
        app.run(args);
    }

}
