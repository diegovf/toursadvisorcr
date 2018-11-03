package com.toursadvisorcr.exception;

/**
 * @author Diego Varela (dvarela@securelink.com) on 10/27/18
 */
public class FileStorageException extends RuntimeException{
    public FileStorageException(String message) {
        super(message);
    }

    public FileStorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
