package com.toursadvisorcr.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

/**
 * @author Diego Varela (dvarela@securelink.com) on 10/27/18
 */
@Data
@AllArgsConstructor
public class UploadFileResponse implements Serializable {
    private String fileName;
    private String fileDownloadUri;
    private String fileType;
    private long size;
}
