package com.toursadvisorcr.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Set;

/**
 * @author Diego Varela (dvarela@securelink.com) on 9/22/18
 */
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"tours"})
@EqualsAndHashCode(exclude = {"tours"})
@Table(name = "destination")
public class Destination implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    @Column(nullable = false, unique = true)
    private String code;

    @NotBlank
    @Column(nullable = false)
    private String name;

    @NotBlank
    @Column(columnDefinition = "text", nullable = false)
    private String description;

    @OneToMany(mappedBy = "destination")
    private Set<Tour> tours;
}
