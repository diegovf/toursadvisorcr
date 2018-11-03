package com.toursadvisorcr.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author Diego Varela (dvarela@securelink.com) on 10/27/18
 */
@ConfigurationProperties(prefix = "file")
public class FileStorageProperties {
    private String uploadDir;

    public String getUploadDir() {
        return uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }
}
