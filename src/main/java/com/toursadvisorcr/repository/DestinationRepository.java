package com.toursadvisorcr.repository;

import com.toursadvisorcr.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 * @author Diego Varela (dvarela@securelink.com) on 9/22/18
 */
public interface DestinationRepository extends JpaRepository<Destination, Long> {
    Destination findByCode(@Param("code") String code);
}
