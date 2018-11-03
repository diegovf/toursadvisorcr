package com.toursadvisorcr;

import com.toursadvisorcr.property.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class ToursadvisorcrApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToursadvisorcrApplication.class, args);
	}
}
