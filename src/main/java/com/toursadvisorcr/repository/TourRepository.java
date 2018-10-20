package com.toursadvisorcr.repository;

import com.toursadvisorcr.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author Diego Varela (dvarela@securelink.com) on 9/22/18
 */
public interface TourRepository extends JpaRepository<Tour, Long> {
    List<Tour> findTop5ByOrderByPriceAsc();
    List<Tour> findTop5ByPicked(@Param("picked") boolean picked);
}
