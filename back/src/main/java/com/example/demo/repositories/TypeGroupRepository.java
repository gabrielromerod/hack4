package com.example.demo.repositories;

import com.example.demo.entities.Group;
import com.example.demo.entities.TypeGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeGroupRepository extends JpaRepository<TypeGroup, Long> {
    List<Group> getAllGroupsById(Long id);
}
