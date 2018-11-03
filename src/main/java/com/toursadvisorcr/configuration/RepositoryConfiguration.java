package com.toursadvisorcr.configuration;

import com.toursadvisorcr.model.Destination;
import com.toursadvisorcr.model.Tour;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

/**
 * @author Diego Varela (dvarela@securelink.com) on 10/17/18
 */
@Configuration
public class RepositoryConfiguration extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Tour.class);
        config.exposeIdsFor(Destination.class);
    }
}
