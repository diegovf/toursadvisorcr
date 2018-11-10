package com.toursadvisorcr.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * @author Diego Varela (dvarela@securelink.com) on 9/22/18
 */
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"destination", "pictures"})
@EqualsAndHashCode(exclude = {"destination", "pictures"})
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

    @Column(columnDefinition = "text")
    private String recommendations;

    @NotBlank
    @Column(columnDefinition = "text", nullable = false)
    private String shortDescription;

    @NotBlank
    @Column(columnDefinition = "text", nullable = false)
    private String longDescription;

    @Column
    private boolean picked;

    @ElementCollection
    private List<String> pictures = new ArrayList<>();

    @ManyToOne(targetEntity = Destination.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "destination", nullable = false)
    private Destination destination;
}
