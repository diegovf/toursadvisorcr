package com.toursadvisorcr.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

/**
 * @author Diego Varela (dvarela@securelink.com) on 9/22/18
 */
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"destination"})
@EqualsAndHashCode(exclude = {"destination"})
@Table(name = "tour")
public class Tour implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private int price;

    @NotBlank
    @Column(columnDefinition = "text", nullable = false)
    private String details;

    @NotBlank
    @Column(columnDefinition = "text", nullable = false)
    private String description;

    @NotBlank
    @Column(columnDefinition = "text", nullable = false)
    private String image;

    @NotBlank
    @Column(columnDefinition = "text", nullable = false)
    private String pdf;

    @ManyToOne(targetEntity = Destination.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "destination", nullable = false)
    private Destination destination;

    @Column
    private Boolean picked;
}
