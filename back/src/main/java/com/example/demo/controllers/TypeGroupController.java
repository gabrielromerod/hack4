package com.example.demo.controllers;


import com.example.demo.dto.GroupDTO;
import com.example.demo.entities.Group;
import com.example.demo.entities.TypeGroup;
import com.example.demo.services.TypeGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/typegroups")
public class TypeGroupController {


    @Autowired
    private TypeGroupService typeGroupService;


    @Autowired
    public TypeGroupController(TypeGroupService typeGroupService) {
        Assert.notNull(typeGroupService, "TypeGroupService must not be null!");
        this.typeGroupService = typeGroupService;
    }


    @GetMapping
    public ResponseEntity<List<TypeGroup>> getAllTypeGroups() {
        List<TypeGroup> typegroups = typeGroupService.getAllTypeGroups();
        return ResponseEntity.ok(typegroups);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<GroupDTO>> getAllGroups(Long typeGroupId) {
        List<GroupDTO> groups = typeGroupService.getAllGroups(typeGroupId);
        return ResponseEntity.ok(groups);
    }
}
